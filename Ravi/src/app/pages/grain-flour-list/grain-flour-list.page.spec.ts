import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrainFlourListPage } from './grain-flour-list.page';

describe('GrainFlourListPage', () => {
  let component: GrainFlourListPage;
  let fixture: ComponentFixture<GrainFlourListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrainFlourListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrainFlourListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
