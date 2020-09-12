import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubirNotasPage } from './subir-notas.page';

describe('SubirNotasPage', () => {
  let component: SubirNotasPage;
  let fixture: ComponentFixture<SubirNotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirNotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubirNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
