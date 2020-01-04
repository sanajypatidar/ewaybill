import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEWayComponent } from './form-e-way.component';

describe('FormEWayComponent', () => {
  let component: FormEWayComponent;
  let fixture: ComponentFixture<FormEWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
