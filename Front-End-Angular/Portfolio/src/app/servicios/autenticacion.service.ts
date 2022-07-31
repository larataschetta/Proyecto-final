import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  uri = 'https://portfolio-larat.herokuapp.com/iniciar-sesion';
  currentUserSubject:BehaviorSubject<any>;
  login = false;

  constructor( private http:HttpClient,private router:Router ) { 
    console.log("serv autenticacion corriendo");
    this.currentUserSubject = new BehaviorSubject <any> (JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  iniciarSesion(credenciales: any):Observable<any> {

    return this.http.post(this.uri, credenciales).pipe(map (data=>{
      sessionStorage.setItem("currentUser", JSON.stringify({data}));
      this.currentUserSubject.value.data = data;
      return data;

    }))
  }
  
  get UsuarioAutenticado(){
    this.login = this.currentUserSubject.value.data;
    return this.currentUserSubject.value.data;
  }

  logOut():Observable<any>{
    sessionStorage.setItem("currentUser", JSON.stringify({"data":false}));
    this.currentUserSubject.value.data = false;
    return this.currentUserSubject.value.data;
  }
  

}
