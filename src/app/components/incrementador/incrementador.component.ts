import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`
  }

  // @Input() progreso: number = 40;
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

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
