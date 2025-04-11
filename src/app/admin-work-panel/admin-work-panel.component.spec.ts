import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkPanelComponent } from './admin-work-panel.component';

describe('AdminWorkPanelComponent', () => {
  let component: AdminWorkPanelComponent;
  let fixture: ComponentFixture<AdminWorkPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminWorkPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWorkPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
