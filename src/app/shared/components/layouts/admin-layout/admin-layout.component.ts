import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  ResolveStart,
  ResolveEnd
} from '@angular/router';
import { Subscription } from "rxjs";
import { LayoutService } from '../../../services/layout.service';
import { filter } from 'rxjs/operators';
import { JwtAuthService } from '../../../services/auth/jwt-auth.service';
import { hrayrDemoAnimations } from 'app/shared/animations/hrayrDemo-animations';



@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html',
  styleUrls: ["./admin-layout.template.scss"],
  animations: hrayrDemoAnimations
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
  public isModuleLoading: Boolean = false;
  private moduleLoaderSub: Subscription;
  private layoutConfSub: Subscription;
  private routerEventSub: Subscription;
  public scrollConfig = {}
  public layoutConf: any = {};
  public sideNavIconsShow: Boolean = false;

  constructor(
    private router: Router,
    public layout: LayoutService,
    private jwtAuth: JwtAuthService
  ) {
    // Check Auth Token is valid
    this.jwtAuth.checkTokenIsValid().subscribe();

    this.routerEventSub = router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((routeChange: NavigationEnd) => {
        this.sideNavIconsShow = (routeChange.url === '/others/iphone' || routeChange.url === '/others/iwatch' || routeChange.url === '/others/macbook') ? true : false;
      });


  }

  ngOnInit() {
    this.layoutConf = this.layout;


    // FOR MODULE LOADER FLAG
    this.moduleLoaderSub = this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.isModuleLoading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.isModuleLoading = false;
      }
    });
  }

  ngAfterViewInit() {

  }

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }

  ngOnDestroy() {
    if (this.moduleLoaderSub) {
      this.moduleLoaderSub.unsubscribe();
    }
    if (this.layoutConfSub) {
      this.layoutConfSub.unsubscribe();
    }
    if (this.routerEventSub) {
      this.routerEventSub.unsubscribe();
    }
  }

}