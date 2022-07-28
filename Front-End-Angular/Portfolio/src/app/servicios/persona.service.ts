import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { persona } from '../model/persona/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = "http://localhost:8080/buscar/persona/21"


  constructor(private http:HttpClient) { }

  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }

  public crearPersona(per:persona):Observable<Object>{
    return this.http.post('http://localhost:8080/new/persona',per);
  }

  public editarPersona(per:persona):Observable<Object>{
    return this.http.put('http://localhost:8080/modificar/persona/21',per)

  }


}
