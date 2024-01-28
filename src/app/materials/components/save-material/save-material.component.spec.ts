import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMaterialComponent } from './save-material.component';

describe('SaveMaterialComponent', () => {
  let component: SaveMaterialComponent;
  let fixture: ComponentFixture<SaveMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
