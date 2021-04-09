import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDeleteDetailComponent } from './brand-delete-detail.component';

describe('BrandDeleteDetailComponent', () => {
  let component: BrandDeleteDetailComponent;
  let fixture: ComponentFixture<BrandDeleteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandDeleteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandDeleteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
