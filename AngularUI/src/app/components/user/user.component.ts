import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User} from 'src/models/user'

@Component({ 
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllTodos().subscribe(data=>{
      this.users=data;
    })
  }

}
