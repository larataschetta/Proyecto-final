import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosDatos:any;
  login=false;

  constructor(private proyectoService:ProyectoService, private ruta:Router, private autenticacionService:AutenticacionService)  {
    this.login = autenticacionService.UsuarioAutenticado;
   }

  ngOnInit(): void {
    this.proyectoService.obtenerDatos().subscribe (data =>{
      this.proyectosDatos = data;
    })
  }


  onEdit(id:number){
    this.ruta.navigate(["/editar-proyecto",id]);
  }


  onDelete(id:number){
    this.proyectoService.borrarProyecto(id).subscribe(data =>{
      this.proyectoService.obtenerDatos().subscribe(dato =>{
        this.proyectosDatos= dato;
      })
    });
  }

  onAgregar(){
    this.ruta.navigate(["/agregar-proyecto"]);
  }
}
