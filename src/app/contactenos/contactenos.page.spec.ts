import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactenosPage } from './contactenos.page';

describe('ContactenosPage', () => {
  let component: ContactenosPage;
  let fixture: ComponentFixture<ContactenosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
