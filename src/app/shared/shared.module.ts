import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ModuleInfoComponent } from './module-info/module-info.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';

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
    HeaderComponent,
    InstructorProfileComponent
  ],
  exports: [
    LoaderComponent,
    NewCourseComponent,
    ModuleInfoComponent,
    HeaderComponent,
    InstructorProfileComponent
  ]
})
export class SharedModule { }
