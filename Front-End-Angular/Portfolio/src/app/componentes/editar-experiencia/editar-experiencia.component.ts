import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/model/persona/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expForm:FormGroup;
  id:number = 0;
  exp:experiencia = new experiencia(0,"","",0,"");
 
  constructor(private ruta:Router,private experienciaServ:ExperienciaService, private route:ActivatedRoute, private formBuilder:FormBuilder) {
    this.expForm=this.formBuilder.group(
      {
        trabajo:["",[Validators.required]],
        tareas:["",[Validators.required]],
        fechaInicio:["",[Validators.required]],
        fechaFin:["",[Validators.required]],
        
      }
    )
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]; 
    this.experienciaServ.buscarExperiencia(this.id).subscribe(dato =>{
      this.exp = dato;
    })

  }

  get Trabajo(){
    return this.expForm.get("trabajo");
  }

  get Tareas(){
    return this.expForm.get("tarea");
  }

  get FechaInicio(){
    return this.expForm.get("fechaInicio");
  }

  get FechaFin(){
    return this.expForm.get("fechaFin");
  }

  

  public editarExp(){
    this.experienciaServ.editarExp(this.id, this.exp).subscribe(()=>{
      this.volverAHome();
    })
  }

  volverAHome(){
    this.ruta.navigate(["/portfolio"]); 
  }


}
