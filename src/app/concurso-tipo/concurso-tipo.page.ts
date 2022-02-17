import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { VariablesService } from "../providers/variables.service";

@Component({
  selector: 'app-concurso-tipo',
  templateUrl: './concurso-tipo.page.html',
  styleUrls: ['./concurso-tipo.page.scss'],
})
export class ConcursoTipoPage implements OnInit {

  tipoConcurso:string;


  constructor(  public global: VariablesService, private route: ActivatedRoute, public router: Router ) { 
    //obtenemos el tipo de programa a listar
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.tipoConcurso = JSON.parse(params.tipoConcurso)
      }
      console.log("el tipo de concurso  a listar es: " + this.tipoConcurso);
    });
    
   }


  ngOnInit() {

    console.log("tipo concurso es:: " + this.tipoConcurso);
    this.global.titulo = this.tipoConcurso;
  }



  goToConcursoEspecifico(tipo)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        tipoConcurso: JSON.stringify(tipo)
      }
    };

    this.router.navigate( ["/tabs/concurso-especifico"], navigationExtras );
  }

  

}
