import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { experiencia } from 'src/app/model/persona/experiencia.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {
  expForm:FormGroup
  exp:experiencia = new experiencia(0,"","",0,"");


  constructor(private ruta:Router, private experienciaService:ExperienciaService  , private route:ActivatedRoute, private formBuilder:FormBuilder) {
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



  volverAHome(){
    this.ruta.navigate(["/portfolio"]); 

  }

  agregarExp(){
    this.experienciaService.agregarExperiencia(this.exp).subscribe(()=>{
      this.volverAHome();
    })
  }


}
