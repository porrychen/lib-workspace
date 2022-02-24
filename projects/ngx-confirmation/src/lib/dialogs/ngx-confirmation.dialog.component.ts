import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxConfirmationConfig } from '../ngx-confirmation.service';

@Component({
  selector: 'ngx-confirmation-dialog',
  templateUrl: './ngx-confirmation.dialog.component.html',
  styleUrls: ['./ngx-confirmation.dialog.component.scss']
})
export class NgxConfirmationDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: NgxConfirmationConfig
  ) { }

  ngOnInit(): void {
  }

}
