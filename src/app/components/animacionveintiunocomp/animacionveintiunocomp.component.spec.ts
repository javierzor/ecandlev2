import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimacionveintiunocompComponent } from './animacionveintiunocomp.component';

describe('AnimacionveintiunocompComponent', () => {
  let component: AnimacionveintiunocompComponent;
  let fixture: ComponentFixture<AnimacionveintiunocompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionveintiunocompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimacionveintiunocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
