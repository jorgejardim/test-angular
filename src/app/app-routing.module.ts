import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayoutComponent } from "./layouts/dashboard/dashboard-layout/dashboard-layout.component";

const routes: Routes = [
    { 
        path: '', component: DashboardLayoutComponent,
        children: [
            {
                path: 'home', loadChildren: './pages/home/home.module#HomeModule',
                data: {
                    breadcrumb: 'Início'
                },
            }
        ]        
    },
    { 
        path: '', component: DashboardLayoutComponent,
        children: [
            {
                path: 'contact', loadChildren: './pages/contact/contact.module#ContactModule',
                data: {
                    breadcrumb: 'Contato'
                },
            }
        ]
    }, 
    { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }