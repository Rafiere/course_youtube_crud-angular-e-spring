import { Component, OnInit } from '@angular/core';
import {Course} from "../models/course";
import {CoursesService} from "../services/courses.service";
import {Observable} from "rxjs";

/* Isso é importante para gerar o bundle da aplicação. */
@Component({
  selector: 'app-courses', //Aqui temos a diretiva, ou seja, o nome da tag do HTML que utilizaremos esse componente.
  templateUrl: './courses.component.html', //É o endereço do arquivo em que temos o HTML para esse componente.
  styleUrls: ['./courses.component.scss'] //Aqui temos uma referência para os arquivos de CSS do componente.
})
export class CoursesComponent implements OnInit {

  /* O componente não sabe os dados que serão renderizados. O serviço que fará a obtenção desses dados. */
  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category']

  /* Estamos fazendo a injeção de dependências. */
  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list()
  }

  ngOnInit(): void {

  }

}
