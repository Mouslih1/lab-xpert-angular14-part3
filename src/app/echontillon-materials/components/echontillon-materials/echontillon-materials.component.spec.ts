import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchontillonMaterialsComponent } from './echontillon-materials.component';

describe('EchontillonMaterialsComponent', () => {
  let component: EchontillonMaterialsComponent;
  let fixture: ComponentFixture<EchontillonMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchontillonMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchontillonMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
