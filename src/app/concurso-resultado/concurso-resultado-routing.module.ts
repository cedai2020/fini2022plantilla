import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcursoResultadoPage } from './concurso-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: ConcursoResultadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcursoResultadoPageRoutingModule {}
