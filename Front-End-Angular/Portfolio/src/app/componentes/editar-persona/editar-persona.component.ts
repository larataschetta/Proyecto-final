import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  perForm:FormGroup;
  miPortfolio: any;

  constructor(private datosPortfolio:PersonaService, private ruta:Router,  private route:ActivatedRoute, private formBuilder:FormBuilder) {

    this.perForm=this.formBuilder.group(
      {
        nombre:["",[Validators.required]],
        apellido:["",[Validators.required]],
        pais:["",[Validators.required]],
        provincia:["",[Validators.required]],
        localidad:["",[Validators.required]],
        mail:["",[Validators.required]],
        telefono:["",[Validators.required]],
        descripcion:["",[Validators.required]],
        fotoPerfil:["",[Validators.required]],
        git:["",[Validators.required]],
        tituloPrograma:["",[Validators.required]]
       
      }
    )
  }


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      this.miPortfolio = data;
    });

  }


  get Nombre(){
    return this.perForm.get("nombre");
  }

  get Apellido(){
    return this.perForm.get("apellido");
  }

  get Pais(){
    return this.perForm.get("pais");
  }

  get Provincia(){
    return this.perForm.get("provincia");
  }

  get Localidad(){
    return this.perForm.get("localidad");
  }

  get Mail(){
    return this.perForm.get("mail");
  }
  get Telefono(){
    return this.perForm.get("telefono");
  }
  get Descripcion(){
    return this.perForm.get("descripcion");
  }
  get FotoPerfil(){
    return this.perForm.get("fotoPerfil");
  }
  get Git(){
    return this.perForm.get("git");
  }
  get TituloPrograma(){
    return this.perForm.get("tituloPrograma");
  }

  volverAHome(){
    this.ruta.navigate(["/portfolio"]);
  }

  editarPersona(){
    this.datosPortfolio.editarPersona(this.miPortfolio).subscribe(()=>{
      this.volverAHome();
    }
    )
  }

}
