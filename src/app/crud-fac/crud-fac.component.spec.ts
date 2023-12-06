import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFacComponent } from './crud-fac.component';

describe('CrudFacComponent', () => {
  let component: CrudFacComponent;
  let fixture: ComponentFixture<CrudFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudFacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
