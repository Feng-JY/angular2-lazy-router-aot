import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { NavComponent } from './nav';
import { HeaderComponent } from './header';
@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    HomeRoutingModule
  ],
  providers: [],

})
export class HomeModule { }
