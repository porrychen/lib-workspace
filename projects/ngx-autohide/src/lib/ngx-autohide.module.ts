import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Directive
import { NgxAutohideDirective } from './directives/ngx-autohide.directive';



@NgModule({
  declarations: [
    NgxAutohideDirective
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    NgxAutohideDirective
  ]
})
export class NgxAutohideModule { }
