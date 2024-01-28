import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveResultComponent } from './save-result.component';

describe('SaveResultComponent', () => {
  let component: SaveResultComponent;
  let fixture: ComponentFixture<SaveResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
