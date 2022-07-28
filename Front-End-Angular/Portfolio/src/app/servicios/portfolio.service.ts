import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { persona } from '../model/persona/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // url = "http://localhost:8080/buscar/persona/21"

  // per:persona;

  constructor( private http:HttpClient) { }

  ngOnInit(){

  }


  // obtenerDatos():Observable <any> {
  //   // console.log("alg" + JSON.stringify(this.http.get(this.url)))  
  //   return this.http.get<any>(this.url);
  // }
  

  // public crearPersona(per:persona):Observable<Object>{
  //   return this.http.post('http://localhost:8080/new/persona',per);
  // }

  // public editarPersona(per:persona):Observable<Object>{
  //   return this.http.put('http://localhost:8080/modificar/persona/21',per)

  // }
}
