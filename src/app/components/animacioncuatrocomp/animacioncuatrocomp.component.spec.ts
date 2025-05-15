import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimacioncuatrocompComponent } from './animacioncuatrocomp.component';

describe('AnimacioncuatrocompComponent', () => {
  let component: AnimacioncuatrocompComponent;
  let fixture: ComponentFixture<AnimacioncuatrocompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacioncuatrocompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimacioncuatrocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
