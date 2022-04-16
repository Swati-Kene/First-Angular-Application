import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  username: string = ' ';
  password: string = ' ';
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
