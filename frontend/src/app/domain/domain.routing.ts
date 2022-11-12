import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {
    path: '',
    loadChildren: () => import('./associacao/associacao.module').then(m => m.AssociacaoModule)
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainRoutes{}