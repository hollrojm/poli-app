import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EjerciciosPage } from './ejercicios.page';

describe('EjerciciosPage', () => {
  let component: EjerciciosPage;
  let fixture: ComponentFixture<EjerciciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjerciciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EjerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
