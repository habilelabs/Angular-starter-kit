import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TranslateRootConfigModule } from 'src/assets/config/translate-config.module';
import { SignupRoutingModule } from './signup-routing.module';
@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateRootConfigModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
