import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEchontillonComponent } from './save-echontillon.component';

describe('SaveEchontillonComponent', () => {
  let component: SaveEchontillonComponent;
  let fixture: ComponentFixture<SaveEchontillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveEchontillonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveEchontillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
