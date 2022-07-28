import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudioComponent } from './componentes/agregar-estudio/agregar-estudio.component';
import { AgregarExperienciaComponent } from './componentes/agregar-experiencia/agregar-experiencia.component';
import { AgregarHabilidadComponent } from './componentes/agregar-habilidad/agregar-habilidad.component';
import { AgregarProyectoComponent } from './componentes/agregar-proyecto/agregar-proyecto.component';
import { EditarEstudioComponent } from './componentes/editar-estudio/editar-estudio.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarHabilidadComponent } from './componentes/editar-habilidad/editar-habilidad.component';
import { EditarPersonaComponent } from './componentes/editar-persona/editar-persona.component';
import { EditarProyectoComponent } from './componentes/editar-proyecto/editar-proyecto.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:"portfolio",component:PortfolioComponent, pathMatch:"full"},
  // {path:"portfolio#sobre-mi", redirectTo:"portfolio#sobre-mi"}, 
  {path:"iniciar-sesion", component:IniciarSesionComponent},
  {path:"",redirectTo:"portfolio",pathMatch:"full"},
  {path:"editar-persona", component:EditarPersonaComponent, canActivate:[GuardGuard] },  
  {path:"editar-experiencia/:id",component:EditarExperienciaComponent, canActivate: [GuardGuard]},
  {path:"agregar-experiencia", component:AgregarExperienciaComponent,canActivate:[GuardGuard]},
  {path:"editar-estudio/:id",component:EditarEstudioComponent, canActivate: [GuardGuard]},
  {path:"agregar-estudio", component:AgregarEstudioComponent,canActivate:[GuardGuard]},
  {path:"editar-habilidad/:id",component:EditarHabilidadComponent, canActivate: [GuardGuard]},
  {path:"agregar-habilidad", component:AgregarHabilidadComponent,canActivate:[GuardGuard]},
  {path:"editar-proyecto/:id",component:EditarProyectoComponent, canActivate: [GuardGuard]},
  {path:"agregar-proyecto", component:AgregarProyectoComponent,canActivate:[GuardGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
