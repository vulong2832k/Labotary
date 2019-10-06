import { Component, OnInit } from '@angular/core';
import { product  } from '../product'
@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeStatus() {
    this.visibleImage = !this.visibleImage;
  }
  searchText;
  visibleImage = true;
  listProducts = [...product];

}
