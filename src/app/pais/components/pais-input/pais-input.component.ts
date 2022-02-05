import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime as deboTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: []
})
export class PaisInputComponent implements OnInit{


  //on : es un evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //se emite cuando dejo de escriibir en el input
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string= '';
  //observable manually
  debouncer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit() {
    this.debouncer
    .pipe( deboTime(300) )
    .subscribe(valor => {
       this.onDebounce.emit(valor);

    });
  }

  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(){
    //llamo debouncer,manda new valor
    this.debouncer.next( this.termino);

  }
}
function debounceTime(): import("rxjs").OperatorFunction<string, unknown> {
  throw new Error('Function not implemented.');
}

