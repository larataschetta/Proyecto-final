import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { habilidad } from '../model/persona/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url = "http://localhost:8080/ver/habilidades"


  constructor( private http:HttpClient ) { }

  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }

  public agregarHabilidad(hab:habilidad):Observable<Object>{
    return this.http.post("http://localhost:8080/new/habilidad/", hab);
  }

  public buscarHabilidad(id:number):Observable<habilidad>{
    return this.http.get<habilidad>("http://localhost:8080/buscar/habilidad/" +id);
  }

  public borrarHabilidad(id:number):Observable<Object>{
    return this.http.delete("http://localhost:8080/delete/habilidad/" +id);
  }

 
  public editarHabilidad(id:number, hab:habilidad):Observable<Object>{
    return this.http.put("http://localhost:8080/modificar/habilidad/" + id, hab);
  }



}
