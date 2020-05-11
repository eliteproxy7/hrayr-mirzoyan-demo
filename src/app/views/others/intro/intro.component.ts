import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { LayoutService } from "../../../shared/services/layout.service";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {
  public animateIn: Boolean = false;
  public number: number = 1111;
  constructor(private layout: LayoutService, private _router: Router) {}
 
  ngAfterViewInit() {
    setTimeout(() => {
      this.layout.bodyShrink = true;
      this.animateIn = true;
    }, 1500);

    setTimeout(() => {
      this.layout.fullHeader = false;
    }, 200);
  
  }

  gotoiPhone() {
    this.layout.fullHeader = true;
    this._router.navigate(["others/home"]);
  }

  ngOnInit() {
 

    setTimeout(() => {
      this.layout.headerPeak = true;
      this.number = 2019;
    }, 1000);
  }
}
