import { Component, OnInit } from '@angular/core';
import { hrayrDemoAnimations } from 'app/shared/animations/hrayrdemo-animations';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  animations: hrayrDemoAnimations

})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
