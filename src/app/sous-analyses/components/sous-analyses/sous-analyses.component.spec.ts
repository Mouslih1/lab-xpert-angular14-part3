import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousAnalysesComponent } from './sous-analyses.component';

describe('SousAnalysesComponent', () => {
  let component: SousAnalysesComponent;
  let fixture: ComponentFixture<SousAnalysesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousAnalysesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousAnalysesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
