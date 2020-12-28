import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'contactmanager', loadChildren: () => import('./contactmanager/contactmanager.module').then(m => m.ContactmanagerModule) },
  { path: 'conduit', loadChildren: () => import('./conduit/conduit.module').then(m => m.ConduitModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
