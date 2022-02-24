import { NgModule } from '@angular/core';

// Components
import { NgxConfirmationDialogComponent } from './dialogs/ngx-confirmation.dialog.component';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NgxConfirmationDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    NgxConfirmationDialogComponent
  ]
})
export class NgxConfirmationModule { }
