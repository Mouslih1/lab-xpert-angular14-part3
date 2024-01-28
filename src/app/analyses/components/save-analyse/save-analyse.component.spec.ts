import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAnalyseComponent } from './save-analyse.component';

describe('SaveAnalyseComponent', () => {
  let component: SaveAnalyseComponent;
  let fixture: ComponentFixture<SaveAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
