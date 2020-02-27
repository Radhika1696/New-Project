import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeliveryPage } from './adddelivery.page';

describe('AdddeliveryPage', () => {
  let component: AdddeliveryPage;
  let fixture: ComponentFixture<AdddeliveryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeliveryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeliveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
