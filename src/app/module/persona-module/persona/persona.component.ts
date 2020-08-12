import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  @Input() name: string;
  @Input() lastName: string;
  @Input() age: number;
  @Input() enabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
