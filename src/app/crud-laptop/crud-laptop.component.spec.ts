import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLaptopComponent } from './crud-laptop.component';

describe('CrudLaptopComponent', () => {
  let component: CrudLaptopComponent;
  let fixture: ComponentFixture<CrudLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudLaptopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
