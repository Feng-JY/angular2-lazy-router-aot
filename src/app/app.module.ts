import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeModule } from './home';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            {
                 path: 'login', loadChildren: './login/login.module#LoginModule',
            },
            { path: '**', redirectTo: '/home' },
        ], { useHash: true }),
        HomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
