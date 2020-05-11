import { hrayrDemoAnimations } from "app/shared/animations/hrayrDemo-animations";
import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { LayoutService } from "../../../shared/services/layout.service";

@Component({
  selector: "app-iphone",
  templateUrl: "./iphone.component.html",
  styleUrls: ["./iphone.component.scss"],
  animations: hrayrDemoAnimations,
})
export class IphoneComponent implements OnInit {
  public layoutConf: any = {};
  public animateIn: Boolean = false;
  public deviceOPUniversal = 0;
  public deviceViewFrontActive: Boolean = false;

  constructor(private layout: LayoutService) {}

  @ViewChild("widgetsContent") widgetsContent: ElementRef;

  @HostListener("scroll", ["$event"]) getScrollWidth(event) {
    this.deviceOPUniversal = event.currentTarget.scrollLeft;
  }

  setDeviceToFront(val) {
    this.deviceViewFrontActive = val;
    this.widgetsContent.nativeElement.scrollLeft = val ? 200 : 0;
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
