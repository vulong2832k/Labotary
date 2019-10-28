import { Component, OnInit } from '@angular/core';
import { productslap08 } from "../guitar"
@Component({
  selector: 'app-checkoutlap08',
  templateUrl: './checkoutlap08.component.html',
  styleUrls: ['./checkoutlap08.component.css']
})
export class Checkoutlap08Component implements OnInit {

  constructor() { }
  productslap08 = [productslap08[0]]
  ngOnInit() {
  }

}
