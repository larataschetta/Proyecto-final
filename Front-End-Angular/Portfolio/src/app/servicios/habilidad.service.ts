import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { habilidad } from '../model/persona/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url = "https://portfolio-larat.herokuapp.com/ver/habilidades"


  constructor( private http:HttpClient ) { }

  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }

  public agregarHabilidad(hab:habilidad):Observable<Object>{
    return this.http.post("https://portfolio-larat.herokuapp.com/new/habilidad/", hab);
  }

  public buscarHabilidad(id:number):Observable<habilidad>{
    return this.http.get<habilidad>("https://portfolio-larat.herokuapp.com/buscar/habilidad/" +id);
  }

  public borrarHabilidad(id:number):Observable<Object>{
    return this.http.delete("https://portfolio-larat.herokuapp.com/delete/habilidad/" +id);
  }

 
  public editarHabilidad(id:number, hab:habilidad):Observable<Object>{
    return this.http.put("https://portfolio-larat.herokuapp.com/modificar/habilidad/" + id, hab);
  }


}
