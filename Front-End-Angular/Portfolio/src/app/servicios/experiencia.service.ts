import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/persona/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = "https://portfolio-larat.herokuapp.com/ver/experiencia"

  constructor( private http:HttpClient ) { }


  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }

  public agregarExperiencia(exp:experiencia):Observable<Object>{
    return this.http.post("https://portfolio-larat.herokuapp.com/new/experiencia/", exp);
  }

  public buscarExperiencia(id:number):Observable<experiencia>{
    return this.http.get<experiencia>("https://portfolio-larat.herokuapp.com/buscar/experiencia/" +id);
  }

  public borrarExperiencia(id:number):Observable<Object>{
    return this.http.delete("https://portfolio-larat.herokuapp.com/delete/experiencia/" +id);
  }

 
  public editarExp(id:number, exp:experiencia):Observable<Object>{
    return this.http.put("https://portfolio-larat.herokuapp.com/modificar/experiencia/" + id, exp);
  }


}
