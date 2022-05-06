import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { CorrentistaComponent } from './components/correntista/correntista.component';
//
const routes: Routes = [
  // Colando as rotas //
  { path: 'movimentacoes-new', component: MovimentacaoNewComponent },
  { path: 'movimentacoes', component: MovimentacaoListComponent },
  { path: 'correntistas', component: CorrentistaComponent },
  { path: '', redirectTo: 'movimentacoes', pathMatch: 'full' },
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
