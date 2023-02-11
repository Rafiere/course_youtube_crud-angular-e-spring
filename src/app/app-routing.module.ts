import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  /* Se tivermos apenas o "localhost", vazio, redirecionaremos para o "/courses". */
  {path: '', redirectTo: 'courses', pathMatch: 'full'},

  /* Essa será uma rota de lazy loading. Isso significa que a aplicação só carregará esse módulo quando
  * ele for necessário. Isso melhora a performance e reduz o tempo de carregamento em geral. */
  {path: 'courses', loadChildren: () => import('./courses/courses.module').then(module => module.CoursesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
