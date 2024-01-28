import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveReactifComponent } from './save-reactif.component';

describe('SaveReactifComponent', () => {
  let component: SaveReactifComponent;
  let fixture: ComponentFixture<SaveReactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveReactifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
