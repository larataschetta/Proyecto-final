import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/persona/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyForm:FormGroup;
  id:number = 0;
  proy:proyecto = new proyecto(0,"",0,"","","");

  constructor(private proyectoService:ProyectoService, private ruta:Router, private route:ActivatedRoute, private formBuilder:FormBuilder) {

    this.proyForm=this.formBuilder.group(
      {
        nombre:["",[Validators.required]],
        anio:["",[Validators.required]],
        descripcion:["",[Validators.required]],
        urlFoto:["",[Validators.required]],
        urlGit:["",[Validators.required]]
        
      }
    )
  } 
 
  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"]; 
    this.proyectoService.buscarProyecto(this.id).subscribe(dato =>{
      this.proy = dato;
    })
  }

  public editarProy(){
    this.proyectoService.editarProyecto(this.id, this.proy).subscribe(()=>{
      this.volverAHome();
    })
  }

  volverAHome(){
    this.ruta.navigate(["/portfolio"]); 
  }

}
