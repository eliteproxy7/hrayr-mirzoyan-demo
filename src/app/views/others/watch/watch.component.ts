import { Component, OnInit } from '@angular/core';
import { LayoutService } from "../../../shared/services/layout.service";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  public layoutConf: any = {};
  public animateIn: Boolean = false;
  public deviceChoice: string = 'black';
  public deviceOPUniversal = 0;
  public deviceViewFrontActive: Boolean = false;
  constructor(private layout: LayoutService) { }


  setDeviceToFront(val) {
    this.deviceViewFrontActive = val;
  }
  ngAfterViewInit() {
    this.layoutConf = this.layout;

    setTimeout(() => {
      this.animateIn = true;
    }, 1500);
  }
  ngOnInit() {
    setTimeout(() => {
      this.layoutConf.bodyShrink = true;
      this.layoutConf.fullHeader = true;
      this.layoutConf.headerPeak = true;
    }, 200);
  }
}
