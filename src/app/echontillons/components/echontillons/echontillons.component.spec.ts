import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchontillonsComponent } from './echontillons.component';

describe('EchontillonsComponent', () => {
  let component: EchontillonsComponent;
  let fixture: ComponentFixture<EchontillonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchontillonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchontillonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
