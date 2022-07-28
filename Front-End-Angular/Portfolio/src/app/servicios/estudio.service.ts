import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { estudio } from '../model/persona/estudio.model';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  url = "http://localhost:8080/ver/estudios"
  
  constructor(  private http:HttpClient ) { }

  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }


  public agregarEstudio(exp:estudio):Observable<Object>{
    return this.http.post("http://localhost:8080/new/estudio/", exp);
  }

  public buscarEstudio(id:number):Observable<estudio>{
    return this.http.get<estudio>("http://localhost:8080/buscar/estudio/" +id);
  }

  public borrarEstudio(id:number):Observable<Object>{
    return this.http.delete("http://localhost:8080/delete/estudio/" +id);
  }

 
  public editarEstudio(id:number, exp:estudio):Observable<Object>{
    return this.http.put("http://localhost:8080/modificar/estudio/" + id, exp);
  }
}
