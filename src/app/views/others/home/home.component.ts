import { hrayrDemoAnimations } from 'app/shared/animations/hrayrDemo-animations';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: hrayrDemoAnimations
})
export class HomeComponent implements OnInit, AfterViewInit {
  public layoutConf: any = {};
  public animateIn: Boolean = false;

  constructor(
    private layout: LayoutService,
  ) { }
  ngAfterViewInit() {
    setTimeout(() => {
      this.animateIn = true;
  
    }, 1500);
    }
    ngOnInit() {
      this.layoutConf = this.layout;
      setTimeout(() => {
        this.layoutConf.bodyShrink = true;
        this.layoutConf.fullHeader = true;
        this.layoutConf.headerPeak = true;
    
      }, 1500);
      
  
    
    }

}
