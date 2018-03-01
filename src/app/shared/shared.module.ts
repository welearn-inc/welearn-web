import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoaderComponent,
    NewCourseComponent
  ],
  exports: [
    LoaderComponent,
    NewCourseComponent
  ]
})
export class SharedModule { }
