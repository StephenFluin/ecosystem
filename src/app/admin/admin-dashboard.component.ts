import { Component } from '@angular/core';
import { Data } from '../data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styles: []
})
export class AdminDashboardComponent {
  components;
  currentComponent = null;
  
  constructor(public data: Data) {
    this.components = data.components;
   }

   save(component) {
     if(component.id) {
       this.data.saveComponent(component);
     } else {
       this.data.createComponent(component);
     }
   }


}
