import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEchontillonMaterialsComponent } from './save-echontillon-materials.component';

describe('SaveEchontillonMaterialsComponent', () => {
  let component: SaveEchontillonMaterialsComponent;
  let fixture: ComponentFixture<SaveEchontillonMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveEchontillonMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveEchontillonMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
