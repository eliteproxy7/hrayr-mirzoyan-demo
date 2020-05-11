import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hrayrDemoAnimations } from 'app/shared/animations/hrayrDemo-animations';

@Component({
  selector: 'app-nav-icon',
  templateUrl: './nav-icon.component.html',
  styleUrls: ['./nav-icon.component.scss'],
  animations: hrayrDemoAnimations
})
export class NavIconComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  gotoRoute(route) {
    this._router.navigate([route])    
  }

  ngOnInit(): void {
  }

}
