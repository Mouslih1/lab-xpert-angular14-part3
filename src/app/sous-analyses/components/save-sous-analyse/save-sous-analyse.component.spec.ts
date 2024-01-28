import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSousAnalyseComponent } from './save-sous-analyse.component';

describe('SaveSousAnalyseComponent', () => {
  let component: SaveSousAnalyseComponent;
  let fixture: ComponentFixture<SaveSousAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveSousAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveSousAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
