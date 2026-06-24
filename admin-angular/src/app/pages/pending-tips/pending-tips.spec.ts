import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTips } from './pending-tips';

describe('PendingTips', () => {
  let component: PendingTips;
  let fixture: ComponentFixture<PendingTips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingTips],
    }).compileComponents();

    fixture = TestBed.createComponent(PendingTips);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
