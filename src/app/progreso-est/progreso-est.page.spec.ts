import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgresoEstPage } from './progreso-est.page';

describe('ProgresoEstPage', () => {
  let component: ProgresoEstPage;
  let fixture: ComponentFixture<ProgresoEstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresoEstPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgresoEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
