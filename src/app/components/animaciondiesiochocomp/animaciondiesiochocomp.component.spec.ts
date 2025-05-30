import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimaciondiesiochocompComponent } from './animaciondiesiochocomp.component';

describe('AnimaciondiesiochocompComponent', () => {
  let component: AnimaciondiesiochocompComponent;
  let fixture: ComponentFixture<AnimaciondiesiochocompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaciondiesiochocompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimaciondiesiochocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
