import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { persona } from '../model/persona/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = "https://portfolio-larat.herokuapp.com/buscar/persona/2"


  constructor(private http:HttpClient) { }

  obtenerDatos():Observable <any> {
    return this.http.get<any>(this.url);
  }

  public crearPersona(per:persona):Observable<Object>{
    return this.http.post('https://portfolio-larat.herokuapp.com/new/persona',per);
  }

  public editarPersona(per:persona):Observable<Object>{
    return this.http.put('https://portfolio-larat.herokuapp.com/modificar/persona/2',per)

  }


}
