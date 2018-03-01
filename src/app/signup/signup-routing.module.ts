import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { SignUpComponent } from './signup.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent, data: { title: extract('signup') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SignUpRoutingModule { }
