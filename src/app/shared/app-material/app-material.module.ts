import {NgModule} from '@angular/core';

import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

/* Esse módulo será utilizado para organizarmos os imports do Angular Material. Assim, se criarmos
* outros módulos, basta importarmos esse módulo e, dessa forma, teremos todos os imports do Angular
* Material, sem precisarmos ficar importando, novamente, todos os componentes em cada módulo que
* o utilizarmos. */
@NgModule({
  exports: [MatTableModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule]
})
export class AppMaterialModule {
}
