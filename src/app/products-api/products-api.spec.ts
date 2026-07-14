import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAPI } from './products-api';

describe('ProductsAPI', () => {
  let component: ProductsAPI;
  let fixture: ComponentFixture<ProductsAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAPI],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
