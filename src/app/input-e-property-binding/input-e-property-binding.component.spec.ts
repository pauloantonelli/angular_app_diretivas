import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEPropertyBindingComponent } from './input-e-property-binding.component';

describe('InputEPropertyBindingComponent', () => {
  let component: InputEPropertyBindingComponent;
  let fixture: ComponentFixture<InputEPropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEPropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
