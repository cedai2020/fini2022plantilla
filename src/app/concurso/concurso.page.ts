import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-concurso-tipo',
  templateUrl: './concurso.page.html',
  styleUrls: ['./concurso.page.scss'],
})
export class ConcursoPage implements OnInit {

  constructor( public global: VariablesService, public router: Router ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    //console.log("entra a ionViewWillEnter");
    this.global.titulo = this.global.tituloConcurso;
  }

  goToConcursoTipo(tipo)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        tipoConcurso: JSON.stringify(tipo)
      }
    };

    this.router.navigate( ["/tabs/concurso-tipo"], navigationExtras );
  }

  

  

}
