import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  students = [
    {
      id: 1,
      name: "Nguyễn Văn Tèo",
      birthday: "20/01/1999",
      gender: "Nam",
      mark: 8.5,
      imageUrl: 'assets/anh1.jpg'
    },
    {
      id: 2,
      name: "Phan Thị Nở",
      birthday: "20/12/1999",
      gender: "Nữ",
      mark: 8,
      imageUrl: 'assets/anh2.jpg'
    },
    {
      id: 3,
      name: "Nguyễn Khá Bảnh",
      birthday: "20/01/2000",
      gender: "Nam",
      mark: 9.5,
      imageUrl: 'assets/anh3.jpg'
    }
  ]
}
