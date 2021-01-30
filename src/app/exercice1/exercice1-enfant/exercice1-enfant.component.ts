import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number; 
  result: number = 0;
  @Output() resultS: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  incrementer(compteur){
    this.compteur++;
    this.result++;
    this.resultS.emit(this.result);
  }

  decrementer(compteur){
    this.compteur--;
    this.result--;
    this.resultS.emit(this.result);
  }
  
}
