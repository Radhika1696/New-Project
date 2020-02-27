import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraditionalFloursListPage } from './traditional-flours-list.page';

describe('TraditionalFloursListPage', () => {
  let component: TraditionalFloursListPage;
  let fixture: ComponentFixture<TraditionalFloursListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalFloursListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraditionalFloursListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
