import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecurringServicePage } from './edit-recurring-service.page';

describe('EditRecurringServicePage', () => {
  let component: EditRecurringServicePage;
  let fixture: ComponentFixture<EditRecurringServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecurringServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecurringServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
