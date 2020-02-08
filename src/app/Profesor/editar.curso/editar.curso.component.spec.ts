import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Editar.CursoComponent } from './editar.curso.component';

describe('Editar.CursoComponent', () => {
  let component: Editar.CursoComponent;
  let fixture: ComponentFixture<Editar.CursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editar.CursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Editar.CursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
