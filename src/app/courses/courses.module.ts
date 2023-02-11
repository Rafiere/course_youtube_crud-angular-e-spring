import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesComponent} from "./courses/courses.component";
import {AppMaterialModule} from "../shared/app-material/app-material.module";

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class CoursesModule {
}
