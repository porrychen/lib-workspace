import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxAutohideComponent } from './ngx-autohide.component';
import { NgxAutohideDirective } from './directives/ngx-autohide.directive';

@NgModule({
  declarations: [
    NgxAutohideComponent,
    NgxAutohideDirective
  ],
  imports: [
    FormsModule
  ],
  exports: [
    NgxAutohideComponent,
    NgxAutohideDirective
  ]
})
export class NgxAutohideModule { }
