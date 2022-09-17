import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { PageNotFoundRoutingModule } from './pageNotFound-routing.module';
import { PageNotFoundComponent } from './pageNotFound.component';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    MatGridListModule
  ]
})
export class PageNotFoundModule { }
