import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file.component';
import { MatIconModule } from '@angular/material/icon';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    FileComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FilePickerModule,
    FlexLayoutModule
  ],
  exports: [
    FileComponent,
    MatIconModule,
    FilePickerModule,
    FlexLayoutModule
  ]
})
export class FileModule { }
