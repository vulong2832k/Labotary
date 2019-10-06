import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product';
@Component({
  selector: 'app-bai4product',
  templateUrl: './bai4product.component.html',
  styleUrls: ['./bai4product.component.css']
})
export class Bai4productComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }
  product;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('productId'))
      this.product = product.filter(product => {
        return product.productId === id
      })[0];
    });
  }

}
