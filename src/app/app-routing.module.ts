import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

const routes: Routes = [
  
  { path: 'calcular-media', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'cadastro-aluno', component: CadastroAlunoComponent},
  { path: 'apolice-seguro', component: ApoliceSeguroComponent},
  { path: '', redirectTo: '/calcular-media', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
