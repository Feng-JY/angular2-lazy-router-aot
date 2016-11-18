import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRoutingModule
    ],
    providers: [],

})
export class LoginModule { } 
