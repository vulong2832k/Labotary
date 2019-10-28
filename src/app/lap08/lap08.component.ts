import { Component, OnInit } from '@angular/core';
import { productslap08 } from '../guitar';
@Component({
  selector: 'app-lap08',
  templateUrl: './lap08.component.html',
  styleUrls: ['./lap08.component.css']
})
export class Lap08Component implements OnInit {

  constructor() { }
  productslap08 = [...productslap08]
  ngOnInit() {
  }

}
