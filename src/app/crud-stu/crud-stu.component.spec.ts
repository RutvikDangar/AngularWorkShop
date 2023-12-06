import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudStuComponent } from './crud-stu.component';

describe('CrudStuComponent', () => {
  let component: CrudStuComponent;
  let fixture: ComponentFixture<CrudStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudStuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
