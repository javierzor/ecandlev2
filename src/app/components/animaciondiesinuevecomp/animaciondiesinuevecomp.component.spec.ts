import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimaciondiesinuevecompComponent } from './animaciondiesinuevecomp.component';

describe('AnimaciondiesinuevecompComponent', () => {
  let component: AnimaciondiesinuevecompComponent;
  let fixture: ComponentFixture<AnimaciondiesinuevecompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaciondiesinuevecompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimaciondiesinuevecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
