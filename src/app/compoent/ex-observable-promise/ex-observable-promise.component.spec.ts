import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExObservablePromiseComponent } from './ex-observable-promise.component';

describe('ExObservablePromiseComponent', () => {
  let component: ExObservablePromiseComponent;
  let fixture: ComponentFixture<ExObservablePromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExObservablePromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExObservablePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
