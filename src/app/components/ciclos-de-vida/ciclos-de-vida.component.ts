import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ciclos-de-vida',
  templateUrl: './ciclos-de-vida.component.html',
  styleUrls: ['./ciclos-de-vida.component.scss']
})
export class CiclosDeVidaComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string;
  constructor() { }

  ngOnChanges(): void {
    console.log('OnInit')
  }

  ngOnInit(): void {
    console.log('OnChanges')
  }

  ngDoCheck(): void {
    console.log('OnInit')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

}
