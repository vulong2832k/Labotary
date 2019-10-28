import { Component, OnInit } from '@angular/core';
import { productslap08 } from "../guitar"
import { ActivatedRoute } from '@angular/router'; 
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-detaillap08',
  templateUrl: './detaillap08.component.html',
  styleUrls: ['./detaillap08.component.css']
})
export class Detaillap08Component implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }
  productslap08
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'))
      console.log(id)
      if (!id) {
        this.location.replaceState("/lab08/detail/1")
        id = 1
      }

      this.productslap08 = productslap08.filter(productslap08 => {
        return productslap08.id === id
      })


    })

    
    console.log(productslap08)
    console.log("sjadhjas")
  }

}
