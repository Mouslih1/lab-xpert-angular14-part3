import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysesComponent } from './analyses.component';

describe('AnalysesComponent', () => {
  let component: AnalysesComponent;
  let fixture: ComponentFixture<AnalysesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
