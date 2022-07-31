import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudiosDatos:any;
  login= false;

  constructor( private estudioService:EstudioService, private ruta:Router, private autenticacionService:AutenticacionService) {
    this.login = autenticacionService.UsuarioAutenticado;
   }

  ngOnInit(): void {
    this.estudioService.obtenerDatos().subscribe (data =>{
      console.log(data)
      this.estudiosDatos = data;
    })
  }

  onEdit(id:number){
    this.ruta.navigate(["/editar-estudio",id]);
  }


  onDelete(id:number){
    this.estudioService.borrarEstudio(id).subscribe(data =>{
      this.estudioService.obtenerDatos().subscribe(dato =>{
        this.estudiosDatos= dato;
      })
    });
  }

  onAgregar(){
    this.ruta.navigate(["/agregar-estudio"]);
  }


}
