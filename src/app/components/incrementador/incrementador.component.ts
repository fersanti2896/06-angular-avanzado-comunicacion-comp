import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {
  progreso: number = 40;

  get getProcentaje() {
    return `${ this.progreso }%` 
  }

  cambiarValor( valor: number ) {
    this.progreso = this.progreso + valor; 
    
    if ( this.progreso < 0 ) {
      this.progreso = 0;
    }

    if ( this.progreso > 100 ) {
      this.progreso = 100;
    }
  }
}