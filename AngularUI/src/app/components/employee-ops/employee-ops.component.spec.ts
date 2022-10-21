import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOpsComponent } from './employee-ops.component';

describe('EmployeeOpsComponent', () => {
  let component: EmployeeOpsComponent;
  let fixture: ComponentFixture<EmployeeOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeOpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
