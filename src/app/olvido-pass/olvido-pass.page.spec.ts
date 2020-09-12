import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlvidoPassPage } from './olvido-pass.page';

describe('OlvidoPassPage', () => {
  let component: OlvidoPassPage;
  let fixture: ComponentFixture<OlvidoPassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidoPassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlvidoPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
