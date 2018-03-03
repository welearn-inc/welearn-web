import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    LoaderComponent,
    HeaderComponent
  ],
  exports: [
    LoaderComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
