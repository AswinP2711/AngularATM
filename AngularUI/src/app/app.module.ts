import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { ArrayOpsComponent } from './components/array-ops/array-ops.component';
import { EmployeeOpsComponent } from './components/employee-ops/employee-ops.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { LikeComponent } from './components/like/like.component';
import { PostComponent } from './components/post/post.component';
import { from } from 'rxjs';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorScheduleComponent } from './components/doctor-schedule/doctor-schedule.component';
import { DoctorAppointmentComponent } from './components/doctor-appointment/doctor-appointment.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewDoctorComponent } from './components/view-doctor/view-doctor.component';
import { ViewLawyerComponent } from './components/view-lawyer/view-lawyer.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ArrayOpsComponent,
    EmployeeOpsComponent,
    ToggleComponent,
    LikeComponent,
    PostComponent,
    TodoComponent,
    UserComponent,
    DoctorComponent,
    DoctorScheduleComponent,
    DoctorAppointmentComponent,
    SignUpComponent,
    NavbarComponent,
    HomeComponent,
    ViewDoctorComponent,
    ViewLawyerComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
