import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductsListComponent } from './products/products-list.component';
import { SummaryComponent } from './home/summary.component';

@NgModule({
  declarations: [ AppComponent, NavComponent, ProductsListComponent, SummaryComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent},
      { path: '**', component:SummaryComponent}
    ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
