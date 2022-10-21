import { Component } from '@angular/core';
import { Employee } from 'src/models/Employee';
import {empArray} from './sample-data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nums:number[]=[4,2,7,1,6,9,8,3];
  employees : Employee[] = empArray;
}
