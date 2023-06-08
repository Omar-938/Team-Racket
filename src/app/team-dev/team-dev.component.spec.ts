import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDevComponent } from './team-dev.component';

describe('TeamDevComponent', () => {
  let component: TeamDevComponent;
  let fixture: ComponentFixture<TeamDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamDevComponent]
    });
    fixture = TestBed.createComponent(TeamDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
