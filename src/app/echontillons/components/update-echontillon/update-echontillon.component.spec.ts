import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEchontillonComponent } from './update-echontillon.component';

describe('UpdateEchontillonComponent', () => {
  let component: UpdateEchontillonComponent;
  let fixture: ComponentFixture<UpdateEchontillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEchontillonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEchontillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
