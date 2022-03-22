import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcursoResultadoPageRoutingModule } from './concurso-resultado-routing.module';

import { ConcursoResultadoPage } from './concurso-resultado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcursoResultadoPageRoutingModule
  ],
  declarations: [ConcursoResultadoPage]
})
export class ConcursoResultadoPageModule {}
