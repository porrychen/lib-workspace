import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { NgxConfirmationDialogComponent } from './ngx-confirmation.dialog.component';
// Directive
import { NgxAutohideDirective } from './directives/ngx-autohide.directive';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NgxConfirmationDialogComponent,
    NgxAutohideDirective
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    NgxConfirmationDialogComponent,
    NgxAutohideDirective
  ]
})
export class NgxAutohideModule { }
