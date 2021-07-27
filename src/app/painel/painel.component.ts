import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase = new Frase('','');
  public progresso: number = 0;
  public tentativas : number = 3;

  constructor() {
    this.mudarResposta();
  }

  ngOnInit(): void {
  }

  public atualizaFrase(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value
  }

  public verificarResposta(): void {
    if (this.resposta.toUpperCase() === this.rodadaFrase.frasePtBr.toUpperCase()) {
      console.log('Acertou');
      this.progresso += (100 / this.frases.length);
      if (this.rodada + 1 < this.frases.length) {
        this.rodada++;
        this.mudarResposta();
      }
    }
    else {
      console.log('Errou');
      this.tentativas--;
      if(this.tentativas === -1){
        alert("GAME OVER :(");
      }
    }
  }

  private mudarResposta(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
