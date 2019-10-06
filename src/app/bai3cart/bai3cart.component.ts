import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3cart',
  templateUrl: './bai3cart.component.html',
  styleUrls: ['./bai3cart.component.css']
})
export class Bai3cartComponent implements OnInit {

  constructor() { }
  products = [
    {
      id: 'ID100',
      image: 'assets/laptop.jpg',
      name: 'Laptop',
      price: 1999,
    },
    {
      id: 'ID101',
      image: 'assets/iphone.jpg',
      name: "Mobile",
      price: 699
    },
    {
      id: 'ID102',
      image: 'assets/tivi.jpg',
      name: 'Telivision',
      price: 499
    },
    {
      id: 'ID103',
      image: 'assets/taiphone.jpg',
      name: 'Head Phone',
      price: 59
    }
  ];
  quantities = {};
  temp = this.products.forEach(product => {
    this.quantities[product.id] = 0
  });

  onIncreaseQuantities(id) {
    let count = this.quantities[id];
    if (count < 20) {
    ++count;
    }
    this.quantities[id] = count;
  }
  onDecreaseQuantities(id) {
    let count = this.quantities[id];
    if (count > 0) {
    --count;
    }
    this.quantities[id] = count;
  }

  totalPrice() {
    let total = 0;
    for (let product of this.products) {
      total += product.price * this.quantities[product.id]
    }
    return total;
  }
  ngOnInit() {
  }

}
