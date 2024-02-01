import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchontillonAnalysesComponent } from './echontillon-analyses.component';

describe('EchontillonAnalysesComponent', () => {
  let component: EchontillonAnalysesComponent;
  let fixture: ComponentFixture<EchontillonAnalysesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchontillonAnalysesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchontillonAnalysesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
