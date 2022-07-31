import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { persona } from '../model/persona/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor( private http:HttpClient) { }

  ngOnInit(){

  }


}
