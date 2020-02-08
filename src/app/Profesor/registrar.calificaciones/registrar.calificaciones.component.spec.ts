import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrar.CalificacionesComponent } from './registrar.calificaciones.component';

describe('Registrar.CalificacionesComponent', () => {
  let component: Registrar.CalificacionesComponent;
  let fixture: ComponentFixture<Registrar.CalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrar.CalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrar.CalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
