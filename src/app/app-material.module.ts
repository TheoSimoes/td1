import { NgModule } from '@angular/core';
/* MATERIAL */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { LayoutModule } from '@angular/cdk/layout'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from "@angular/material/paginator"; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar'; 

@NgModule({
  exports: [
    BrowserAnimationsModule,
    LayoutModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatTooltipModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatTableModule, 
    MatPaginatorModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [ 
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500, verticalPosition: 'top'}}
  ]
}) 
export class AppMaterialModule { }