import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactifsComponent } from './reactifs.component';

describe('ReactifsComponent', () => {
  let component: ReactifsComponent;
  let fixture: ComponentFixture<ReactifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
