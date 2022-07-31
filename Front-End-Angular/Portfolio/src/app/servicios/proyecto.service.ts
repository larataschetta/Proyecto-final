import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { proyecto } from '../model/persona/proyecto.model';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
  url = "https://portfolio-larat.herokuapp.com/ver/proyectos"


  constructor( private http:HttpClient ) { }

  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }

  public agregarProyecto(proy:proyecto):Observable<Object>{
    return this.http.post("https://portfolio-larat.herokuapp.com/new/proyecto/", proy);
  }

  public buscarProyecto(id:number):Observable<proyecto>{
    return this.http.get<proyecto>("https://portfolio-larat.herokuapp.com/buscar/proyecto/" +id);
  }

  public borrarProyecto(id:number):Observable<Object>{
    return this.http.delete("https://portfolio-larat.herokuapp.com/delete/proyecto/" +id);
  }

 
  public editarProyecto(id:number, proy:proyecto):Observable<Object>{
    return this.http.put("https://portfolio-larat.herokuapp.com/modificar/proyecto/" + id, proy);
  }
}
