import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerDatos:any;

  constructor(private datosPortfolio:PersonaService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.footerDatos = data;
    })
  }

}
