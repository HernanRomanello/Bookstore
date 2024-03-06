import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUsersDiscountComponent } from './update-users-discount.component';

describe('UpdateUsersDiscountComponent', () => {
  let component: UpdateUsersDiscountComponent;
  let fixture: ComponentFixture<UpdateUsersDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateUsersDiscountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateUsersDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
