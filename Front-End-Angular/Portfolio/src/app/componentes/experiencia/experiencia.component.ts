import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaDatos:any;
  login=false;
  

  constructor(private datosExperiencia:ExperienciaService, private ruta:Router, private autenticacionService:AutenticacionService) {
    this.login= autenticacionService.UsuarioAutenticado;
   }

  ngOnInit(): void {
    this.datosExperiencia.obtenerDatos().subscribe(data => {
      this.experienciaDatos = data;
    })
  }

  onEdit(id:number){
    this.ruta.navigate(["/editar-experiencia",id]);
  }


  onDelete(id:number){
    this.datosExperiencia.borrarExperiencia(id).subscribe(data =>{
      this.datosExperiencia.obtenerDatos().subscribe(dato =>{
        this.experienciaDatos= dato;
      })
    });
  }

  onAgregar(){
    this.ruta.navigate(["/agregar-experiencia"]);
  }

}
