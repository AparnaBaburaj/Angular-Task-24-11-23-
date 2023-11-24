import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        component:StudentsComponent,
        path:''
    },
    {
        component:TestComponent,
        path:'test'
    },
];
