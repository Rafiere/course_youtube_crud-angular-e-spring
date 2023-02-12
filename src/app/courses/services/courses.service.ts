import {Injectable} from '@angular/core';
import {Course} from "../models/course";
import {HttpClient} from "@angular/common/http";
import {delay, first, tap} from "rxjs/operators";

/* Os decorators adicionam informações sobre o ciclo de vida de uma determinada classe no Angular. */

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json'


  /* Toda a manipulação de dados relacionado aos cursos será feita nessa classe. É nessa classe que
  * ajustaremos os dados para virem corretamente no servidor. */

  /* A injeção de dependências está sendo feita pelo construtor. Estamos dizendo para o Angular que
  * queremos uma dependência do HTTP Client, e o Angular ficará responsável por fornecer a instância
  * dessa classe. */

  /* Quando declaramos o "HttpClientModule" no "app.module.ts", o Angular saberá que a instância que será
  * criada deverá ser pega dentro do AppModule. */
  constructor(private httpClient: HttpClient) {
  }

  list() {

    /* Estamos retornando um objeto do tipo Observable<Course[]>*/

    return this.httpClient.get<Course[]>(this.API).pipe(first(), delay(5000),
      (tap(courses => console.log(courses))));
  }
}
