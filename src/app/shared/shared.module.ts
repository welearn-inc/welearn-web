import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    LoaderComponent,
    ProfileComponent
  ],
  exports: [
    LoaderComponent,
    ProfileComponent
  ]
})
export class SharedModule { }