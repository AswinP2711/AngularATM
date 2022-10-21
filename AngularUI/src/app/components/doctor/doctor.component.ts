import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/models/doctor';

@Component({ 
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors:Doctor[];

  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(data=>{
      this.doctors=data;
    })
  }

}
