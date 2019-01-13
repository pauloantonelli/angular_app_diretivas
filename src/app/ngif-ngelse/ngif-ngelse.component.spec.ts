import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifNgelseComponent } from './ngif-ngelse.component';

describe('NgifNgelseComponent', () => {
  let component: NgifNgelseComponent;
  let fixture: ComponentFixture<NgifNgelseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifNgelseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifNgelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
