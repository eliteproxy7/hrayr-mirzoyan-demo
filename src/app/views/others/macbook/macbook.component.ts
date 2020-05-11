import { hrayrDemoAnimations } from 'app/shared/animations/hrayrDemo-animations';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../../shared/services/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-macbook',
  templateUrl: './macbook.component.html',
  styleUrls: ['./macbook.component.scss'],
  animations: hrayrDemoAnimations
})
export class MacbookComponent implements OnInit {

  private layoutConfSub: Subscription;
  public layoutConf: any = {};
  public animateIn: Boolean = false;

  constructor(
    private layout: LayoutService,
    private _router: Router
  ) { }
  ngAfterViewInit() {

    setTimeout(() => {
      this.animateIn = true;
  
    }, 1500);
    }
  ngOnInit() {
    this.layoutConf = this.layout;

    this.layoutConf.bodyShrink = true;
    this.layoutConf.fullHeader = true;
    this.layoutConf.headerPeak = true;
  }

}
