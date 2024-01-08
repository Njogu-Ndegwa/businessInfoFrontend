import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeWithdrawalComponent } from './make-withdrawal.component';

describe('MakeWithdrawalComponent', () => {
  let component: MakeWithdrawalComponent;
  let fixture: ComponentFixture<MakeWithdrawalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeWithdrawalComponent]
    });
    fixture = TestBed.createComponent(MakeWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
