import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/persona/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = "http://localhost:8080/ver/experiencia"

  constructor( private http:HttpClient ) { }


  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }

  public agregarExperiencia(exp:experiencia):Observable<Object>{
    return this.http.post("http://localhost:8080/new/experiencia/", exp);
  }

  public buscarExperiencia(id:number):Observable<experiencia>{
    return this.http.get<experiencia>("http://localhost:8080/buscar/experiencia/" +id);
  }

  public borrarExperiencia(id:number):Observable<Object>{
    return this.http.delete("http://localhost:8080/delete/experiencia/" +id);
  }

 
  public editarExp(id:number, exp:experiencia):Observable<Object>{
    return this.http.put("http://localhost:8080/modificar/experiencia/" + id, exp);
  }


}
