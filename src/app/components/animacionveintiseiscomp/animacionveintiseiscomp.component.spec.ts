import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimacionveintiseiscompComponent } from './animacionveintiseiscomp.component';

describe('AnimacionveintiseiscompComponent', () => {
  let component: AnimacionveintiseiscompComponent;
  let fixture: ComponentFixture<AnimacionveintiseiscompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionveintiseiscompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimacionveintiseiscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
