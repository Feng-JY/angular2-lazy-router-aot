import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav';
import { HeaderComponent } from './header';

export let routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '', component: NavComponent,
            },
            {
                path: 'header', component: HeaderComponent,
            },
            {
                path: 'nav', component: NavComponent,
            }
        ]
    }
];

// {
//     path: 'login', loadChildren: '../login/login.module#LoginModule',
//  },
// {
//     path: 'header', loadChildren: () => System.import('../login/login.module').then((cmp: any) => {
//         return cmp.default;
//     }) 
// },

@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule]

})
export class HomeRoutingModule { }
