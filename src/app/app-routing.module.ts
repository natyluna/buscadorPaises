import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes =[
  //defino las ruta principal
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  //otras rutas las
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  {

    //este es para el caso q la ruta no exista ej 404
    path: '**',
    redirectTo:''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
