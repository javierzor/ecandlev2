import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimacionveinticuatrocompComponent } from './animacionveinticuatrocomp.component';

describe('AnimacionveinticuatrocompComponent', () => {
  let component: AnimacionveinticuatrocompComponent;
  let fixture: ComponentFixture<AnimacionveinticuatrocompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionveinticuatrocompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimacionveinticuatrocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
