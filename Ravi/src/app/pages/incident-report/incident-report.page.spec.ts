import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReportPage } from './incident-report.page';

describe('IncidentReportPage', () => {
  let component: IncidentReportPage;
  let fixture: ComponentFixture<IncidentReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
