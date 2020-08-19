import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-votante',
  templateUrl: './votante.component.html',
  styleUrls: ['./votante.component.scss']
})
export class VotanteComponent implements OnInit {
  @Input() nombre: string;
  @Input() edad: number;
  @Input() habilitado: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
