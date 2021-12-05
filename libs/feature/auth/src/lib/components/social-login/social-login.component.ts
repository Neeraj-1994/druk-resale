import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {
fight:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    this.fight =! this.fight;
    console.log(this.fight)
  }
}
