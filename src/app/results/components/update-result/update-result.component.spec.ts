import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResultComponent } from './update-result.component';

describe('UpdateResultComponent', () => {
  let component: UpdateResultComponent;
  let fixture: ComponentFixture<UpdateResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
