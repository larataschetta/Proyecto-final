import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { proyecto } from '../model/persona/proyecto.model';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
  url = "http://localhost:8080/ver/proyectos"


  constructor( private http:HttpClient ) { }

  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }

  public agregarProyecto(proy:proyecto):Observable<Object>{
    return this.http.post("http://localhost:8080/new/proyecto/", proy);
  }

  public buscarProyecto(id:number):Observable<proyecto>{
    return this.http.get<proyecto>("http://localhost:8080/buscar/proyecto/" +id);
  }

  public borrarProyecto(id:number):Observable<Object>{
    return this.http.delete("http://localhost:8080/delete/proyecto/" +id);
  }

 
  public editarProyecto(id:number, proy:proyecto):Observable<Object>{
    return this.http.put("http://localhost:8080/modificar/proyecto/" + id, proy);
  }
}
