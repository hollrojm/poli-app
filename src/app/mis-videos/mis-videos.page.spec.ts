import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisVideosPage } from './mis-videos.page';

describe('MisVideosPage', () => {
  let component: MisVideosPage;
  let fixture: ComponentFixture<MisVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisVideosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
