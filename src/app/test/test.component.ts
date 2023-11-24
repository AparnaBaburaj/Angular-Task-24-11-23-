import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from '../custom-pipe.pipe';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule,CustomPipePipe,RouterModule,RouterOutlet],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
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
