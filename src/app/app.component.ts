import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CustomPipePipe } from './custom-pipe.pipe';
import { TestComponent } from './test/test.component';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CustomPipePipe,RouterModule,TestComponent,StudentsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';
  public num=3;
  public heading='introduction to angular';
  public currentdate:Date=new Date();
  public decimalnum:number=123456.789;
  public person={
    Firstname: 'John',
    lastname: 'Joseph',
    age: 30,
  };
}


