import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ModuleInfoComponent } from './module-info/module-info.component';
import { TranslateModule } from '@ngx-translate/core';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';

import { HeaderComponent } from './header/header.component';
@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoaderComponent,
    NewCourseComponent,
    ModuleInfoComponent, 
    InstructorProfileComponent,
    HeaderComponent
  ],
  exports: [
    LoaderComponent,
    NewCourseComponent,
    ModuleInfoComponent, 
    InstructorProfileComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
