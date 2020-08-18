import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-get-set-input',
  templateUrl: './get-set-input.component.html',
  styleUrls: ['./get-set-input.component.scss']
})
export class GetSetInputComponent implements OnInit, OnChanges {

  intermediario:string;

  @Input()
  get name(): string{
    return this.intermediario;
  }
  set name(name){
    this.intermediario = name;
  }

  @Input() lastname:string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes.lastname && changes.lastname.currentValue) {
      console.log('On changes' , changes.lastname.currentValue);
      const aux = 'de ' + changes.lastname.currentValue;
      this.lastname = aux;
    }
  }

}
