import { Component, OnInit, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { JwtAuthService } from '../../services/auth/jwt-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-side',
  templateUrl: './header-side.template.html',
  styleUrls: ['./header-side.component.scss']
})
export class HeaderSideComponent implements OnInit {
   public layoutConf:any;
  constructor(
    private layout: LayoutService,
    public jwtAuth: JwtAuthService,
    private _router: Router
  ) {}

  gotoRoute(route) {
    this._router.navigate([route])    
  }


  ngOnInit() {
    this.layoutConf = this.layout;
  }


  signout(){
    this.jwtAuth.signout();
  }

}