import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesComponent} from "./courses/courses.component";
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {CoursesRoutingModule} from "./courses-routing.module";

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule
  ]
})
export class CoursesModule {
}
