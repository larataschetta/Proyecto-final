import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  sobreMiDatos:any;

  constructor(private datosPortfolio:PersonaService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe (data => {
      this.sobreMiDatos = data;
    })
  }

}
