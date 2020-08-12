import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css']
})
export class ComponentInputOutputComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;
  @Input() description: string;

  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  printConsole(){
    this.click.emit({
      Name: this.name,
      Age: this.age,
      Description: this.description
    })
  }

}