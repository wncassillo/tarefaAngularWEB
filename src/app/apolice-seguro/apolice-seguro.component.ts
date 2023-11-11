import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {
  nome: string;
  sexo: string;
  idade: number;
  valor: number;
  apolice = null;
  dadosValidos = false;

  calcular(){
    if (!this.sexo || !this.idade || !this.valor){
      this.dadosValidos = false;  
      this.apolice = 0;
    } else {
      this.dadosValidos = true;
      if (this.sexo == 'masculino') {
        if (this.idade <= 25) {
          this.apolice = this.valor * 0.15;
        } else {
          this.apolice = this.valor * 0.10;
        }}
       else {
        this.apolice = this.valor * 0.08;
      }
    }
    }
}
