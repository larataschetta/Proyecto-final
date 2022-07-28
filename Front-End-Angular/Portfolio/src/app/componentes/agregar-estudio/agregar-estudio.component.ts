import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { estudio } from 'src/app/model/persona/estudio.model';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-agregar-estudio',
  templateUrl: './agregar-estudio.component.html',
  styleUrls: ['./agregar-estudio.component.css']
})
export class AgregarEstudioComponent implements OnInit {
  estForm:FormGroup;

  est:estudio = new estudio(0, "", "", "", 0, "");


  constructor( private ruta:Router, private estudioService:EstudioService,private route:ActivatedRoute, private formBuilder:FormBuilder) { 
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
  }


  agregarEstudio(){
    this.estudioService.agregarEstudio(this.est).subscribe(()=>{
      this.volverAHome();
    })
  }

  volverAHome(){
    this.ruta.navigate(["/portfolio"]); 

  }
}
