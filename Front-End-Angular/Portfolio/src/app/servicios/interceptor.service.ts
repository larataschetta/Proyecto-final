import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {

  constructor(private autenticacionService:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {


    return next.handle(req);
  }
}
