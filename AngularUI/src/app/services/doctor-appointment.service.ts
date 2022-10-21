import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorAppointment } from 'src/models/doctor_appointment';
import { DoctorComponent } from '../components/doctor/doctor.component';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentService {

  constructor(private http:HttpClient) { }

  getAllDoctorAppointments():Observable<DoctorAppointment[]>{
    return this.http.get<DoctorAppointment[]>('http://localhost:4398/doctor/appointment/view/all');
  }
}
