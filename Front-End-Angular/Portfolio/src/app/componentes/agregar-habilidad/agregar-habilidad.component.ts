import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { habilidad } from 'src/app/model/persona/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent implements OnInit {
  habForm:FormGroup;
  id:number = 0;
  hab:habilidad = new habilidad(0,"",0);


  constructor( private habilidadService:HabilidadService, private ruta:Router, private formBuilder:FormBuilder ) {
    this.habForm=this.formBuilder.group(
      {
        nombre:["",[Validators.required]],
        porcentaje:["",[Validators.required]],
        
      }
    )

  }

  ngOnInit(): void {
  }

  volverAHome(){
    this.ruta.navigate(["/portfolio"]); 

  }

  agregarHab(){
    this.habilidadService.agregarHabilidad(this.hab).subscribe(()=>{
      this.volverAHome();
    })
  }

}
