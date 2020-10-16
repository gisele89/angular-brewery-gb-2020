import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsterdamClothesComponent } from './amsterdam-clothes.component';

describe('AmsterdamClothesComponent', () => {
  let component: AmsterdamClothesComponent;
  let fixture: ComponentFixture<AmsterdamClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmsterdamClothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsterdamClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
