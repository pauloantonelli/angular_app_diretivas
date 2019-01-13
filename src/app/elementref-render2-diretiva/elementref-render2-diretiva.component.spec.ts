import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementrefRender2DiretivaComponent } from './elementref-render2-diretiva.component';

describe('ElementrefRender2DiretivaComponent', () => {
  let component: ElementrefRender2DiretivaComponent;
  let fixture: ComponentFixture<ElementrefRender2DiretivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementrefRender2DiretivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementrefRender2DiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
