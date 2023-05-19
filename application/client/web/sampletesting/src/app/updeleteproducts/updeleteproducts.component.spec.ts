import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdeleteproductsComponent } from './updeleteproducts.component';

describe('UpdeleteproductsComponent', () => {
  let component: UpdeleteproductsComponent;
  let fixture: ComponentFixture<UpdeleteproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdeleteproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdeleteproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});