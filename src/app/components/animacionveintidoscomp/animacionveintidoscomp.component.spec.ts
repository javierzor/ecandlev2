import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimacionveintidoscompComponent } from './animacionveintidoscomp.component';

describe('AnimacionveintidoscompComponent', () => {
  let component: AnimacionveintidoscompComponent;
  let fixture: ComponentFixture<AnimacionveintidoscompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionveintidoscompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimacionveintidoscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
