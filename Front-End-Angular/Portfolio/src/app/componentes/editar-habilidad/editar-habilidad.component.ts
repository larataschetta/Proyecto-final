import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { habilidad } from 'src/app/model/persona/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {
  habForm:FormGroup;
  id:number = 0;
  hab:habilidad = new habilidad(0,"",0);


  constructor( private habilidadServ:HabilidadService, private ruta:Router, private formBuilder:FormBuilder, private route:ActivatedRoute) {
    this.habForm=this.formBuilder.group(
      {
        nombre:["",[Validators.required]],
        porcentaje:["",[Validators.required]],
        
      }
    )

   }

  ngOnInit(): void {
  
    this.id = this.route.snapshot.params["id"]; 
    this.habilidadServ.buscarHabilidad(this.id).subscribe(dato =>{
      this.hab = dato;
    })
  
  }

  public editarHab(){
    this.habilidadServ.editarHabilidad(this.id, this.hab).subscribe(()=>{
      this.volverAHome();
    })
  }

  volverAHome(){
    this.ruta.navigate(["/portfolio"]); 
  }

}
