import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClasesPage } from './clases.page';

describe('ClasesPage', () => {
  let component: ClasesPage;
  let fixture: ComponentFixture<ClasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
