import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSystemComponent } from './bill-system.component';

describe('BillSystemComponent', () => {
  let component: BillSystemComponent;
  let fixture: ComponentFixture<BillSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
