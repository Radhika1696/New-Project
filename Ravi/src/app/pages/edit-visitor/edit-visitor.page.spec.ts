import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisitorPage } from './edit-visitor.page';

describe('EditVisitorPage', () => {
  let component: EditVisitorPage;
  let fixture: ComponentFixture<EditVisitorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVisitorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVisitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
