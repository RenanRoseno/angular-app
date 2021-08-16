import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges{

  public coracaoVazio = '../../assets/coracao_vazio.svg';
  public coracaoCheio = '../../assets/coracao_cheio.svg';
  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  @Input() public tentativas: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      if (this.coracoes[indice - 1])
        this.coracoes[indice - 1].cheio = false;
    }
  }
}
