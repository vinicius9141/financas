import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFinancesComponent } from './register-finances.component';

describe('RegisterFinancesComponent', () => {
  let component: RegisterFinancesComponent;
  let fixture: ComponentFixture<RegisterFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFinancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
