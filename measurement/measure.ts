/**
 * This assumes a system setup like mine to run. @TODO
 * Run this with ts-node
 *
 * @angular/cli is globally installed
 * git is globally installed
 * /tmp/ is an okay folder to put temporary files
 *
 */

// Why doesn't this work with ts-node?
// import { readdirSync, readFileSync } from 'fs';

const { readdirSync, readFileSync } = require('fs');
const exec = require('child_process').exec;

const sandbox = '/tmp/';
const projectFolder = sandbox + 'ecotest';
const patchSourceFolder = '/super/workspace/stephenfluin/ecosystem/measurement/patches/';

const setup = `rm -rf ${projectFolder}; ng new ecotest --routing --style=scss;`;

let baseSize: number;

console.log('Beginning new project setup.');

promiseExec(setup, { cwd: sandbox })
  .then(result => {
    console.log('New project setup complete.');
    return buildAndMeasure();
  })
  .then(size => {
    console.log('Base JS is', size, 'bytes');
    baseSize = size;
    const patchList = enumeratePatches();
    const tasks = patchList.map(patchFile => applyPatchAndMeasure(patchFile));

    Promise.all(tasks).then(sizeResults => {
      console.log('Finished measuring all patches.', sizeResults);
    });
  })
  .catch(err => {
    console.error('Failed during setup.', err);
  });

/**
 * Execute a command but get back a promise.
 */
function promiseExec(cmd: string, options = {}) {
  return new Promise((resolve, reject) => {
    exec(cmd, options, (error, stdout, stderr) => {
      if (error) {
        reject([error, stdout, stderr]);
      } else {
        resolve(stdout);
      }
    });
  });
}

/**
 *
 * @param stats A stats object parsed from a stats-es2015.json file
 */
function getTotalJsSize(stats: { assets: { name: string; size: number }[] }): number {
  let total = 0;
  for (const file of stats.assets) {
    if (file.name.match(/.*\.js$/)) {
      // console.log(file.name + ' appears to be a JS file, adding it to the total', file.size);
      total += file.size;
    }
  }
  return total;
}

function buildAndMeasure(): Promise<number> {
  console.log('Building and measuring JS size...');
  return promiseExec('ng build --prod --stats-json', { cwd: projectFolder })
    .then(result => {
      const file = `${projectFolder}/dist/ecotest/stats-es2015.json`;
      const stats = JSON.parse(readFileSync(file) + '');
      return getTotalJsSize(stats);
    })
    .catch(error => {
      console.error('Failed to build and measure project size.');
      return 0;
    });
}

function enumeratePatches(): string[] {
  const files = readdirSync(patchSourceFolder);
  console.log('found the following patches:', files);
  return files;
}

function applyPatchAndMeasure(patchName: string): Promise<{ patch: string; size: number }> {
  console.log('Restting and applying', patchName);
  return promiseExec(
    `git clean -df;
  git checkout -- .;
  git apply ${patchSourceFolder}/${patchName};
  yarn`,
    { cwd: projectFolder }
  )
    .catch(err => {
      console.error('Error while resetting and applying patch');
      return 0;
    })
    .then(result => buildAndMeasure())
    .then(jsSize => ({ patch: patchName, size: jsSize }));
}
