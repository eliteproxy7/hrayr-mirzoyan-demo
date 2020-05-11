import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePartsService } from './services/route-parts.service';
import { AuthGuard } from './guards/auth.guard';
import { UserRoleGuard } from './guards/user-role.guard';
import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  imports: [
  CommonModule,
    SharedComponentsModule
  ],
  providers: [
    RoutePartsService,
    AuthGuard,
    UserRoleGuard
  ],
  exports: [
    SharedComponentsModule
  ]
})
export class SharedModule { }
