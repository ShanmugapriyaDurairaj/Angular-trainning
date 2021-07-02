import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExChildRoutesComponent } from './ex-child-routes.component';

describe('ExChildRoutesComponent', () => {
  let component: ExChildRoutesComponent;
  let fixture: ComponentFixture<ExChildRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExChildRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExChildRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
