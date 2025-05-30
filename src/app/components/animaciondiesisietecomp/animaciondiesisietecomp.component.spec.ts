import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimaciondiesisietecompComponent } from './animaciondiesisietecomp.component';

describe('AnimaciondiesisietecompComponent', () => {
  let component: AnimaciondiesisietecompComponent;
  let fixture: ComponentFixture<AnimaciondiesisietecompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaciondiesisietecompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimaciondiesisietecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
