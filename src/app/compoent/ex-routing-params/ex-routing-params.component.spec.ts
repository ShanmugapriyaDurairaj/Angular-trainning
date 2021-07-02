import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExRoutingParamsComponent } from './ex-routing-params.component';

describe('ExRoutingParamsComponent', () => {
  let component: ExRoutingParamsComponent;
  let fixture: ComponentFixture<ExRoutingParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExRoutingParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExRoutingParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
