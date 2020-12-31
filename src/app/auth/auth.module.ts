import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthComponent } from './auth.component';

const authRouting: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRouting),
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent
  ],

  providers: []
})
export class AuthModule {}
