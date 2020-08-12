import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-ts',
  template: `
    <p>HTML escrito desde el propio ts</p>
  `,
  styles: []
})
export class SoloTsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
