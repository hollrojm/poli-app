import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubirVideosPage } from './subir-videos.page';

describe('SubirVideosPage', () => {
  let component: SubirVideosPage;
  let fixture: ComponentFixture<SubirVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirVideosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubirVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
