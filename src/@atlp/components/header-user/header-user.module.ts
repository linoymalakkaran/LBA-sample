import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './header-user.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AvatarsModule } from '../avatars/avatars.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    HeaderUserComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    AvatarsModule,
    MatMenuModule
  ],
  exports: [
    HeaderUserComponent,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class HeaderUserModule { }
