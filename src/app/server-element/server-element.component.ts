import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
@Input() element :{type: string, name: string, content: string};
  constructor() {
    console.log("Constructor Called")
   }
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges Called ::", changes)
  }
  ngOnInit() {
    console.log("ngOnInit Called")
  }
  ngDoCheck() {
    console.log("ngDoCheck Called")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit Called")
  }
}