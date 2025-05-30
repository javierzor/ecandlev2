import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimacioncatorcecompComponent } from './animacioncatorcecomp.component';

describe('AnimacioncatorcecompComponent', () => {
  let component: AnimacioncatorcecompComponent;
  let fixture: ComponentFixture<AnimacioncatorcecompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacioncatorcecompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimacioncatorcecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
