import { Injectable} from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface ILayoutConf {
  fullHeader: false,
  bodyShrink: false,
  headerPeak: false,
}

@Injectable({
  providedIn: "root"
})
export class LayoutService {
  public layoutConf: ILayoutConf;
  layoutConfSubject = new BehaviorSubject<ILayoutConf>(this.layoutConf);
  layoutConf$ = this.layoutConfSubject.asObservable();
  public currentRoute: string;
  public fullHeader: boolean;
  public bodyShrink: boolean;
  public headerPeak: boolean;
  public fullWidthRoutes = [];

  constructor() {
  }

  setAppLayout(layoutConf: ILayoutConf) {
    this.layoutConf = { ...this.layoutConf, ...layoutConf };

  }

}
