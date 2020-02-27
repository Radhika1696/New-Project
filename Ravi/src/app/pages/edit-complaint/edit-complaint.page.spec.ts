import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComplaintPage } from './edit-complaint.page';

describe('EditComplaintPage', () => {
  let component: EditComplaintPage;
  let fixture: ComponentFixture<EditComplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
