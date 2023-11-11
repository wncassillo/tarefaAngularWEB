import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})

export class CalcularMediaComponent {
  ac1: number;
  ac2: number;
  ag: number;
  af: number;
  media: number;
  resultado: String;

  calcular(){
    this.media = 
    (this.ac1 * 0.15) +
    (this.ac2 * 0.30) +
    (this.ag * 0.10) +
    (this.af * 0.45)
    this.resultado = this.media >= 5 ? 'O Aluno foi Aprovado.':'O Aluno foi Reprovado';
  }
  
}
