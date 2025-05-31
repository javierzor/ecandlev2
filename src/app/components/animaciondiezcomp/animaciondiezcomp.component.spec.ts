import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimaciondiezcompComponent } from './animaciondiezcomp.component';

describe('AnimaciondiezcompComponent', () => {
  let component: AnimaciondiezcompComponent;
  let fixture: ComponentFixture<AnimaciondiezcompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaciondiezcompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimaciondiezcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
