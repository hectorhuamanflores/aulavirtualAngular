import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acceso.CursoComponent } from './acceso.curso.component';

describe('Acceso.CursoComponent', () => {
  let component: Acceso.CursoComponent;
  let fixture: ComponentFixture<Acceso.CursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acceso.CursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acceso.CursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
