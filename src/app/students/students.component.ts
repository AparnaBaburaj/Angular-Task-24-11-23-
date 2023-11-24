import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CustomPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,CustomPipePipe],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  students = [
    { name: 'Aparna TB', gender: 'female', age:25,dept:'IT',sem:7,cgpa:8.1,pyear:2023 },
    { name: 'Athulya Sajeev', gender: 'female', age:23,dept:'CS',sem:5,cgpa:7.9,pyear:2024 },
    { name: 'Athul Raj', gender: 'male',age:24,dept:'EEE',sem:3,cgpa:8.5,pyear:2025  },
    { name: 'Jaison Varghese', gender: 'male',age:22 ,dept:'IT',sem:7,cgpa:8.6,pyear:2023 },
    // Add more student data as needed
  ];
}
