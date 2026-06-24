import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTips } from './approved-tips';

describe('ApprovedTips', () => {
  let component: ApprovedTips;
  let fixture: ComponentFixture<ApprovedTips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovedTips],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovedTips);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
