import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExSwitchComponent } from './ex-switch.component';

describe('ExSwitchComponent', () => {
  let component: ExSwitchComponent;
  let fixture: ComponentFixture<ExSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
