import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstudioComponent } from './agregar-estudio.component';

describe('AgregarEstudioComponent', () => {
  let component: AgregarEstudioComponent;
  let fixture: ComponentFixture<AgregarEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
