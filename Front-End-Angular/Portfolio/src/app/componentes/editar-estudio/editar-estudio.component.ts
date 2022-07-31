import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { estudio } from 'src/app/model/persona/estudio.model';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-estudio',
  templateUrl: './editar-estudio.component.html',
  styleUrls: ['./editar-estudio.component.css']
})
export class EditarEstudioComponent implements OnInit {
  estForm:FormGroup;
  id:number = 0;
  est:estudio = new estudio(0, "", "", "", 0, "");

  constructor( private estudioService:EstudioService, private ruta:Router, private route:ActivatedRoute, private formBuilder:FormBuilder) { 
    this.estForm=this.formBuilder.group(
      {
        titulo:["",[Validators.required]],
        institucion:["",[Validators.required]],
        descripcion:["",[Validators.required]],
        fechaInicio:["",[Validators.required]],
        fechaFin:["",[Validators.required]]
        
      }
    )
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"]; 
    this.estudioService.buscarEstudio(this.id).subscribe(dato =>{
      this.est = dato;
    })
  }

  get Titulo(){
    return this.estForm.get("trabajo");
  }

  get Institucion(){
    return this.estForm.get("institucion");
  }

  get Descripcion(){
    return this.estForm.get("descripcion");
  }

  get FechaInicio(){
    return this.estForm.get("fechaInicio");
  }

  get FechaFin(){
    return this.estForm.get("fechaFin");
  }

  public editarEstudio(){
    this.estudioService.editarEstudio(this.id, this.est).subscribe(()=>{
      this.volverAHome();
    })
  }

  volverAHome(){
    this.ruta.navigate(["/portfolio"]); 
  }
}
