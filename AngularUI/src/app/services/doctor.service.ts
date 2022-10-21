import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {Doctor} from 'src/models/doctor';
 
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getAllDoctors():Observable<Doctor[]>{
    return this.http.get<Doctor[]>('http://localhost:4398/doctor/all');
  }
}
