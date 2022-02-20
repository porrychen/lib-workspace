import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAutohideComponent } from './ngx-autohide.component';

describe('NgxAutohideComponent', () => {
  let component: NgxAutohideComponent;
  let fixture: ComponentFixture<NgxAutohideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAutohideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAutohideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
