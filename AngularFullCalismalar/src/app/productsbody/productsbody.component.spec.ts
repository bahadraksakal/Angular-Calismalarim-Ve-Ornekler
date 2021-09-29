import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsbodyComponent } from './productsbody.component';

describe('ProductsbodyComponent', () => {
  let component: ProductsbodyComponent;
  let fixture: ComponentFixture<ProductsbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
