import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderSideComponent } from './header-side/header-side.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NavIconComponent } from './nav-icon/nav-icon.component';



const components = [
  HeaderSideComponent,
  NavIconComponent,
  AdminLayoutComponent,
  AuthLayoutComponent
  ]

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule
    ],
  declarations: components,
  entryComponents: [],
  exports: components
})
export class SharedComponentsModule {}