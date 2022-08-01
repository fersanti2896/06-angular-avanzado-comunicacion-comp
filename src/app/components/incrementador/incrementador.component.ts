import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {
  // @Input() progreso: number = 40;
  @Input('valor') progreso: number = 40;

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor: number ) {
    this.progreso = this.progreso + valor; 
    this.valorSalida.emit( this.progreso );
    
    if ( this.progreso < 0 ) {
      this.valorSalida.emit(0);
      this.progreso = 0;
    }

    if ( this.progreso > 100 ) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    }
  }
}
