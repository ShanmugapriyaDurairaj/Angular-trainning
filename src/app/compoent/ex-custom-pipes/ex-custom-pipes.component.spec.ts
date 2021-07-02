import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCustomPipesComponent } from './ex-custom-pipes.component';

describe('ExCustomPipesComponent', () => {
  let component: ExCustomPipesComponent;
  let fixture: ComponentFixture<ExCustomPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExCustomPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
