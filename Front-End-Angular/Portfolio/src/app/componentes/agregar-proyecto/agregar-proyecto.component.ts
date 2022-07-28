import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/persona/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  proyForm:FormGroup;
  id:number = 0;
  proy:proyecto = new proyecto(0,"",0,"","","");



  constructor( private proyectoService:ProyectoService, private ruta:Router, private route:ActivatedRoute, private formBuilder:FormBuilder) {
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
  }

  volverAHome(){
    this.ruta.navigate(["/portfolio"]); 

  }

  agregarProyecto(){
    this.proyectoService.agregarProyecto(this.proy).subscribe(()=>{
      this.volverAHome();
    })
  }

}
