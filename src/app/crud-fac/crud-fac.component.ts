import { Component } from '@angular/core';
class facFormat {
  Name: string;
  Exp: number;
  Img: string;

  constructor() {
    this.Name = '';
    this.Exp = 0;
    this.Img = '';
  }
}

@Component({
  selector: 'app-crud-fac',
  templateUrl: './crud-fac.component.html',
  styleUrls: ['./crud-fac.component.css'], // Change styleUrl to styleUrls
})
export class CrudFacComponent {
  editIndex = -1;
  facData: facFormat[] = [
    {
      Name: 'ArjunBala',
      Exp: 13,
      Img: 'https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg',
    },
    {
      Name: 'Dr. Nilesh Gambhava',
      Exp: 20,
      Img: 'https://darshan.ac.in/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg',
    },
    {
      Name: 'Dr. Pradyumansinh Jadeja',
      Exp: 18,
      Img: 'https://darshan.ac.in/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg',
    },
    {
      Name: 'Prof. Naimish Vadodariya',
      Exp: 10,
      Img: 'https://darshan.ac.in/U01/Faculty-Photo/214---28-04-2023-02-08-35.jpg',
    },
    {
      Name: 'Prof. Jayesh Vagadiya',
      Exp: 8,
      Img: 'https://darshan.ac.in/U01/Faculty-Photo/219---28-04-2023-02-09-01.jpg',
    },
    {
      Name: 'Prof. Krunal Vyas',
      Exp: 10,
      Img: 'https://darshan.ac.in/U01/Faculty-Photo/290---28-04-2023-02-09-16.jpg',
    },
  ];

  tempFac = new facFormat();

  addFaculty() {
    this.facData.push(this.tempFac);
    this.tempFac = new facFormat();
  }

  editItem(index: number) {
    this.tempFac.Name = this.facData[index].Name;
    this.tempFac.Exp = this.facData[index].Exp;
    this.tempFac.Img = this.facData[index].Img;
    this.editIndex = index;
  }

  editFaculty() {
    this.facData[this.editIndex] = this.tempFac;
    this.tempFac = new facFormat();
    this.editIndex = -1;
  }
}
