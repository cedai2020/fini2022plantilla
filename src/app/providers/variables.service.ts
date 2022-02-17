import { Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  public textoBarraSuperior: string = "FESTIVAL INTERNACIONAL DE LA IMAGEN";
  textoFINInosotros:string = 'Festival Internacional de la Imagen';
  titulo:string;
  tituloGeneral:string = 'MENÚ';
  tituloProgramaTipo:string = 'PROGRAMA';
  tituloConcursoTipo:string;
  tituloProgramaDias:string;
  tituloProgramaEspecifico:string;
  tituloConcurso:string = 'CONCURSO';
  tituloPais:string = 'PAIS INVITADO DE HONOR';
  tituloArtistas:string = 'ARTISTAS INVITADOS';
  tituloNosotros:string = 'NOSOTROS';
  tituloBuscar:string = 'BUSCAR';
  tituloProgramaTransmision:string = 'TRANSMISIÓN'

  constructor( private route: ActivatedRoute ) {
    
  }


}
