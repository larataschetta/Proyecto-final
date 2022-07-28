import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortfolio: any;
  login= false;


  constructor(private datosPortfolio:PersonaService, private ruta:Router, private autenticacionService:AutenticacionService) { 
    // if(autenticacionService.UsuarioAutenticado){
    //   this.login=true;
    // }
    this.login = autenticacionService.UsuarioAutenticado;
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      this.miPortfolio = data;
    });
  }

  public onEdit(){
    this.ruta.navigate(["/editar-persona"])
  }

  irInicioSesion(){
    this.ruta.navigate(['/iniciar-sesion']);
  }

}
