import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  uri = 'http://localhost:8080/iniciar-sesion';
  currentUserSubject:BehaviorSubject<any>;
  login:boolean = false;

  constructor( private http:HttpClient,private router:Router ) { 
    console.log("serv autenticacion corriendo");
    this.currentUserSubject = new BehaviorSubject <any> (JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
    console.log("current user" + sessionStorage.getItem("currentUser")); //da {"data":true} o null
  }

  iniciarSesion(credenciales: any):Observable<any> {
    console.log("Data inicioses 1" + this.currentUserSubject.value.data)

    return this.http.post(this.uri, credenciales).pipe(map (data=>{
      sessionStorage.setItem("currentUser", JSON.stringify({data}));
      console.log("user" +  JSON.stringify(this.currentUserSubject.value.data)) //no tiene en value true
      this.currentUserSubject.value.data = data;
      console.log("Data inicioses 2" + this.currentUserSubject.value) //da undifined
      console.log("data solo" + data)
      return data; //da true

    }))
  }
  
  get UsuarioAutenticado(){
    this.login = this.currentUserSubject.value.data;
    console.log("login " + this.login);
    return this.currentUserSubject.value.data; //devuelve [object][object] pongo .data?

  }

}
