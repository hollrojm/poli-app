import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerNotasPage } from './ver-notas.page';

describe('VerNotasPage', () => {
  let component: VerNotasPage;
  let fixture: ComponentFixture<VerNotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerNotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
