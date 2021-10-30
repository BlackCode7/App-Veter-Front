import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetLoginComponent } from './pet-login.component';

describe('PetLoginComponent', () => {
  let component: PetLoginComponent;
  let fixture: ComponentFixture<PetLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
