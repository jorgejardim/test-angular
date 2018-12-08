import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
    {
        path: '', component: ContactComponent,
        children: [
            {
                path: 'login', loadChildren: './pages/contact/contact.module#ContactModule',
                data: {
                    breadcrumb: 'Contato'
                },
            }
        ]
    },
    {
        path: '', component: HomeComponent,
        children: [
            {
                path: 'home', loadChildren: './pages/home/home.module#HomeModule',
                data: {
                    breadcrumb: 'Início'
                },
            }
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
