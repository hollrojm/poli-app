import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimuladorClasesPage } from './simulador-clases.page';

describe('SimuladorClasesPage', () => {
  let component: SimuladorClasesPage;
  let fixture: ComponentFixture<SimuladorClasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladorClasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimuladorClasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
