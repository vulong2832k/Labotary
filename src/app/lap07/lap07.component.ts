import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-lap07',
  templateUrl: './lap07.component.html',
  styleUrls: ['./lap07.component.css']
})
export class Lap07Component implements OnInit {
  constructor() { }
  isEdit
  isAdd
  currentStudent

  onEdit(id) {
    this.isEdit = true
    this.isAdd = false
    this.currentStudent = {
      ...this.students.filter(student => {
                        return student.id === id
                      })[0] 
        }
  }
  onCancel(){
    this.isEdit = false
    this.isAdd = false
  }
  add(){
    this.currentStudent = {
      id: this.students.length + 1,
      fullName: "",
      birthday: "",
      mark: 0,
    }
    this.isAdd = true
    this.isEdit = false
  }
  onAdd(){
     this.students.push(this.currentStudent)
     this.onCancel()
  }
  onDelete(id){
    let isDelete = confirm(" Bạn có chắc chắn muốn xóa sinh viên này????? Hasagi!!!")
    if (isDelete)
    this.students = this.students.filter(student => {
      return student.id !== id
    })
  }
  
  ngOnInit(){
    this.isEdit = false
    this.isAdd = true
  }
  showFormEdit:boolean = false; selectStudentId=-1;
  formStudent = { 
  id: 0, 
  fullName:'', 
  birthday: new Date().toISOString().substring(0, 10), 
  mark: 0, 
  }; 
  students: Student[] = [ 
  { 
  id: 1,
  fullName: 'Nguyễn văn tèo', 
  birthday: new Date(2019, 6, 30),  
  mark: 8  
  },  
  {  
  id: 2,  
  fullName: 'Phan thị nở',  
  birthday: new Date(2019, 2, 29),  
  mark: 8  
  },  
  ];    
  //xep loai  
  gradeStudent(student: Student) {  
  if (student.mark >= 0 && student.mark < 5) {  
  return 'Yếu/Kém'  
  } else {  
  if (5 <= student.mark && student.mark <= 8) return 'Trung bình/Khá'; if (student.mark > 8) return 'Giỏi/Xuất sắc'
  }  
  }   
}