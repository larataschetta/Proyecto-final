import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { estudio } from '../model/persona/estudio.model';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  url = "https://portfolio-larat.herokuapp.com/ver/estudios"
  
  constructor(  private http:HttpClient ) { }

  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }


  public agregarEstudio(est:estudio):Observable<Object>{
    return this.http.post("https://portfolio-larat.herokuapp.com/new/estudio/", est);
  }

  public buscarEstudio(id:number):Observable<estudio>{
    return this.http.get<estudio>("https://portfolio-larat.herokuapp.com/buscar/estudio/" +id);
  }

  public borrarEstudio(id:number):Observable<Object>{
    return this.http.delete("https://portfolio-larat.herokuapp.com/delete/estudio/" +id);
  }

 
  public editarEstudio(id:number, est:estudio):Observable<Object>{
    return this.http.put("https://portfolio-larat.herokuapp.com/modificar/estudio/" + id, est);
  }
}
