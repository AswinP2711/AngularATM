import { Component, OnInit } from '@angular/core';
import { DoctorAppointmentService } from 'src/app/services/doctor-appointment.service';
import { DoctorAppointment } from 'src/models/doctor_appointment';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  doctorAppointments:DoctorAppointment[];

  constructor(private doctorAppointmentService:DoctorAppointmentService) { }

  ngOnInit(): void {
    this.doctorAppointmentService.getAllDoctorAppointments().subscribe(data=>{
      this.doctorAppointments=data;
    })
  }

}
