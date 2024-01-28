import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFournisseurComponent } from './save-fournisseur.component';

describe('SaveFournisseurComponent', () => {
  let component: SaveFournisseurComponent;
  let fixture: ComponentFixture<SaveFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
