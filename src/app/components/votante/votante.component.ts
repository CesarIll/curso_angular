import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-votante',
  templateUrl: './votante.component.html',
  styleUrls: ['./votante.component.scss']
})
export class VotanteComponent implements OnInit {
  @Input() nombre: string;
  @Input() edad: number;
  @Input() habilitado: boolean;
  @Output() emitirVoto = new EventEmitter();
  voto = false;
  constructor() { }

  ngOnInit(): void {
  }

  aumentarVoto(): void{
    this.voto = true;
    this.emitirVoto.emit(1);
  }

}
