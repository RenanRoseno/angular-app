import { Component, Input, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

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

}
