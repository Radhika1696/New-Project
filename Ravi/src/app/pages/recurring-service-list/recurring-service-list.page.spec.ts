import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringServiceListPage } from './recurring-service-list.page';

describe('RecurringServiceListPage', () => {
  let component: RecurringServiceListPage;
  let fixture: ComponentFixture<RecurringServiceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringServiceListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringServiceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
