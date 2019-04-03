import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { AboutComponent } from './about.component';
import { DetailsComponent } from './details.component';
import { GridComponent } from './grid.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    DetailsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([
      {path: '', component: SearchComponent},
      {path: 'about', component: AboutComponent},
      {path: ':id/', component: DetailsComponent},
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
      {path: '**', redirectTo: '/'},
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
