import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProdComponent } from './crud-prod.component';

describe('CrudProdComponent', () => {
  let component: CrudProdComponent;
  let fixture: ComponentFixture<CrudProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
