import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  public rodadaFrase: Frase = new Frase('', '');
  public progresso: number = 0;
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

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
      this.progresso += (100 / this.frases.length);
      this.rodada++;
      if (this.rodada === 4)
        this.encerrarJogo.emit('VITÓRIA');
      this.mudarResposta();
    }
    else {
      this.tentativas--;
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('DERROTA')
      }
    }
  }

  private mudarResposta(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
