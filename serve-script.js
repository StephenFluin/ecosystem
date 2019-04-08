const join = require('path').join;
const concurrently = require('concurrently');
const spawn = require('cross-spawn');

const PROJECT_NAME = 'ecosystem';

// Pre-build all packages (SSR)
const SSR_BUILD_SCRIPT = `ng build --prod && ng run ${PROJECT_NAME}:server:production`;
const SERVER_COMPILE_SCRIPT =
  './node_modules/.bin/webpack --config webpack.server.config.js --progress --colors';

const script = spawn(`${SSR_BUILD_SCRIPT} && ${SERVER_COMPILE_SCRIPT}`, {
  shell: true,
  stdio: 'inherit',
});

// Setup live reload server (websocket)
const livereload = require('livereload');
const server = livereload.createServer();
server.watch(join(__dirname, 'dist', 'browser'));
process.on('SIGINT', () => {
  try {
    server && server.close();
  } catch {}
  process.exit();
});

script.on('exit', code => {
  if (code !== 0) {
    return;
  }
  // Static server + live browser reload + watch mode + initial SSR (first build)
  concurrently(
    [
      'ng build --aot --watch --delete-output-path=false',
      'tsc --watch -p server/tsconfig.json',
      'nodemon --watch dist dist/server-app/main --delay 1 --exec "node"',
    ],
    {
      raw: true,
      killOthers: true,
    },
  );
});
