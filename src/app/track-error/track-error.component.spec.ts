import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackErrorComponent } from './track-error.component';

describe('TrackErrorComponent', () => {
  let component: TrackErrorComponent;
  let fixture: ComponentFixture<TrackErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
