import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Order1Page } from './order1.page';

describe('Order1Page', () => {
  let component: Order1Page;
  let fixture: ComponentFixture<Order1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Order1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
