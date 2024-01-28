import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEchontillonMaterialsComponent } from './update-echontillon-materials.component';

describe('UpdateEchontillonMaterialsComponent', () => {
  let component: UpdateEchontillonMaterialsComponent;
  let fixture: ComponentFixture<UpdateEchontillonMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEchontillonMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEchontillonMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
