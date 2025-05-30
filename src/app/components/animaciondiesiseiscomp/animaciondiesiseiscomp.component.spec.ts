import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimaciondiesiseiscompComponent } from './animaciondiesiseiscomp.component';

describe('AnimaciondiesiseiscompComponent', () => {
  let component: AnimaciondiesiseiscompComponent;
  let fixture: ComponentFixture<AnimaciondiesiseiscompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaciondiesiseiscompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimaciondiesiseiscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
