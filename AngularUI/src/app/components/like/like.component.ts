import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  likeCount:number =0;
  constructor() { }

  ngOnInit(): void {
  }
  changeCount(action){
    switch (action) {
      case 'LIKE':
        this.likeCount= this.likeCount+1;
        break;
        case 'DISLIKE':
          if (this.likeCount <= 0) {
            break;
          }else{
            this.likeCount=this.likeCount-1;
          }
          break;
      default:
        break;
    }
  }

}
