import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-stu',
  templateUrl: './crud-stu.component.html',
  styleUrl: './crud-stu.component.css'
})
export class CrudStuComponent {
  data = [
    {Name:"Dev", RollNo:3},
    {Name:"Vaidik", RollNo:13},
    {Name:"Jeel", RollNo:4},
    {Name:"Bhargav", RollNo:23},
    {Name:"Viraj", RollNo:1},
    {Name:"Khusal", RollNo:43},
  ]

  editFlag = false;
  editIndex = -1

  inputName:any = null;
  inputRollNo:any=null; 

  addToData(Name:any,RollNo:any) {
    if(Name&&RollNo){this.data.push({Name,RollNo})}
    
  }

  editItem(index:number){
    this.editFlag=true;
    this.editIndex= index;
    this.inputName = this.data[this.editIndex].Name
    this.inputRollNo = this.data[this.editIndex].RollNo
  }

  editData(Name:any,RollNo:any){
    this.data[this.editIndex].Name = Name;
    this.data[this.editIndex].RollNo = RollNo;
    this.inputName= null;
    this.inputRollNo=null;
    this.editFlag = false; 
    this.editIndex = -1;
  }

}
