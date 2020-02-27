import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstantMixexListPage } from './instant-mixex-list.page';

describe('InstantMixexListPage', () => {
  let component: InstantMixexListPage;
  let fixture: ComponentFixture<InstantMixexListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantMixexListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstantMixexListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
