import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { IconsService } from '@atlp/services/icons.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AtlpProgressBarModule, StepperModule } from '@atlp/components';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IMaskModule } from 'angular-imask';
import { AtlpDirectivesModule } from '@atlp/directives/directives';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatToolbarModule,
    AtlpProgressBarModule,
    StepperModule,
    FilePickerModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    IMaskModule,
    AtlpDirectivesModule,
    MatMenuModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatToolbarModule,
    AtlpProgressBarModule,
    StepperModule,
    FilePickerModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    IMaskModule,
    AtlpDirectivesModule,
    MenuComponent,
    MatMenuModule,
  ],
  providers: [
    IconsService,
  ],
})
export class SharedModule { }
