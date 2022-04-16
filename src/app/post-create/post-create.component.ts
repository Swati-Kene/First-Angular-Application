import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  Title:string = "Login My App";
  username: string = ' ';
  password: string = ' ';
  imageUrl: string = "assets/image/mean_logo.png";
  btnStatus: boolean = false;
  LoginUser()
  {
    this.username && this.password;
    {
      console.log("Welcome")
    }
  }
  constructor() { }

  ngOnInit() :void{
  }
}
