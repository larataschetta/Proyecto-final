import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router, private http:HttpClient) {
    
    this.form=this.formBuilder.group(
      {
        id:["4",Validators.required],
        correo:["",[Validators.required,Validators.email]],
        contrasenia:["",[Validators.required]]
      }
    )

  }

  ngOnInit(): void {
    
  }

  get Email(){
    return this.form.get("correo");
  }

  get Contrasenia(){
    return this.form.get("contrasenia");
  }

  get Id(){
    return this.form.get("id");
  }

  uri = 'http://localhost:8080/iniciar-sesion';


  respuesta: String= "";

  onEnviar(event:Event){
    event.preventDefault; 
   
    this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{

      if(data){
      this.ruta.navigate(['/portfolio']);
      } else{
        this.respuesta= "El usuario y/o la contraseña es incorrecta";
      }

    }
    )
  }

}
