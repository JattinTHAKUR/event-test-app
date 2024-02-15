import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetIssuesComponent } from './fleet-issues.component';

describe('FleetIssuesComponent', () => {
  let component: FleetIssuesComponent;
  let fixture: ComponentFixture<FleetIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FleetIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
