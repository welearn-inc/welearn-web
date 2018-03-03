import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { CourseComponent } from './course.component';

const routes: Routes = [
  { path: 'course', component: CourseComponent, data: { title: extract('course') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CourseRoutingModule { }
