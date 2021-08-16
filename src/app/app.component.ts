import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  public jogoEmAndamento: boolean = true;

  public encerrarJogo(msg: string): void {
    alert(msg);
    this.jogoEmAndamento = false;
  }

  public novoJogo(): void {
    this.jogoEmAndamento = true;
  }
}
