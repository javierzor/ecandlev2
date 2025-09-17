import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimacionveintitrescompComponent } from './animacionveintitrescomp.component';

describe('AnimacionveintitrescompComponent', () => {
  let component: AnimacionveintitrescompComponent;
  let fixture: ComponentFixture<AnimacionveintitrescompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionveintitrescompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimacionveintitrescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
