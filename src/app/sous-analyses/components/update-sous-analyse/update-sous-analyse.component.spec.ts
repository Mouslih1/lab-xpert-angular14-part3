import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSousAnalyseComponent } from './update-sous-analyse.component';

describe('UpdateSousAnalyseComponent', () => {
  let component: UpdateSousAnalyseComponent;
  let fixture: ComponentFixture<UpdateSousAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSousAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSousAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
