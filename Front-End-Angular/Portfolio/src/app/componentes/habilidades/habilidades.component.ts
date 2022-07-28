import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadesDatos:any;
  login= false;
  
  constructor( private habilidadServ:HabilidadService, private ruta:Router, private autenticacionService:AutenticacionService) { 
    this.login = autenticacionService.UsuarioAutenticado;
  }

  ngOnInit(): void {
    this.habilidadServ.obtenerDatos().subscribe (data => {
      this.habilidadesDatos = data;
    })
  }

  onEdit(id:number){
    this.ruta.navigate(["/editar-habilidad",id]);
  }


  onDelete(id:number){
    this.habilidadServ.borrarHabilidad(id).subscribe(data =>{
      this.habilidadServ.obtenerDatos().subscribe(dato =>{
        this.habilidadesDatos= dato;
      })
    });
  }

  onAgregar(){
    this.ruta.navigate(["/agregar-habilidad"]);
  }

}
