import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReportListPage } from './incident-report-list.page';

describe('IncidentReportListPage', () => {
  let component: IncidentReportListPage;
  let fixture: ComponentFixture<IncidentReportListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentReportListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentReportListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
