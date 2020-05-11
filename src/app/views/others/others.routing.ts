import { Routes } from '@angular/router';
import { IphoneComponent } from './iphone/iphone.component';
import { MacbookComponent } from './macbook/macbook.component';
import { WatchComponent } from './watch/watch.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

export const OthersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'intro',
        component: IntroComponent,
        data: {
          title: 'Home', breadcrumb: 'HOME', animation: {
            value: 'intro',
          }
        }
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home', breadcrumb: 'HOME', animation: {
            value: 'home',
          }
        }
      },
      {
        path: 'iphone',
        component: IphoneComponent,
        data: {
          title: 'iphone', breadcrumb: 'IPHONE', animation: {
            value: 'iphone',
          }
        }
      },
      {
        path: 'macbook',
        component: MacbookComponent,
        data: {
          title: 'MacBook', breadcrumb: 'MACBOOK', animation: {
            value: 'macbook',
          }
        }
      },
      {
        path: 'iwatch',
        component: WatchComponent,
        data: {
          title: 'iwatch', breadcrumb: 'IWATCH', animation: {
            value: 'iwatch',
          }
        }
      }
    ]
  }
];