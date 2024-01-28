import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnalyseComponent } from './update-analyse.component';

describe('UpdateAnalyseComponent', () => {
  let component: UpdateAnalyseComponent;
  let fixture: ComponentFixture<UpdateAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
