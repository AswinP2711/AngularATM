import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {DoctorSchedule} from 'src/models/doctor_schedule'

@Injectable({
  providedIn: 'root'
})
export class DoctorScheduleService {

  constructor(private http:HttpClient) { }

  getAllDoctorSchedule():Observable<DoctorSchedule[]>{
    return this.http.get<DoctorSchedule[]>('http://localhost:4398/doctor/all');
  }
}
