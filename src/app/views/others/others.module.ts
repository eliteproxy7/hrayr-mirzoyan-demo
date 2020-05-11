import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../../shared/shared.module';
import { TmNgOdometerModule } from 'tm-ng-odometer';
import { OthersRoutes } from "./others.routing";
import { IntroComponent } from './intro/intro.component';
import { IphoneComponent } from './iphone/iphone.component';
import { MacbookComponent } from './macbook/macbook.component';
import { WatchComponent } from './watch/watch.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    TmNgOdometerModule,
    RouterModule.forChild(OthersRoutes)
  ],
  declarations: [ IntroComponent, IphoneComponent, MacbookComponent, WatchComponent,HomeComponent
  ]
})
export class OthersModule { }
