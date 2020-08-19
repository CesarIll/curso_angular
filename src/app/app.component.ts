import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';
  votos = 0;
  habilitados = 0;
  inhabilitados = 0;
  votantes = [
    {
      nombre: "juan",
      edad: 13,
      habilitado: true
    },
    {
      nombre : "marco",
      edad : 54,
      habilitado : false
    },
    {
      nombre : "julia",
      edad : 78,
      habilitado : true
    },
    {
      nombre : "maria",
      edad : 90,
      habilitado : false
    },
    {
      nombre : "marta",
      edad : 56,
      habilitado : true
    },
    {
      nombre : "jorge",
      edad : 33,
      habilitado : true
    },
    {
      nombre : "isela ",
      edad : 10,
      habilitado : false
    },
    {
      nombre : "omar ",
      edad : 34,
      habilitado : false
    },
    {
      nombre : "juana ",
      edad : 5,
      habilitado : true
    },
    {
      nombre : "julio ",
      edad : 75,
      habilitado : false
    },
    ];

    ngOnInit(): void {
      for (let votante of this.votantes) {
        if (votante.habilitado) {
          this.habilitados++;
        } else {
          this.inhabilitados++;
        }
      }
    }
}
