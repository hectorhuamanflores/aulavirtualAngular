import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrar.PreguntasComponent } from './registrar.preguntas.component';

describe('Registrar.PreguntasComponent', () => {
  let component: Registrar.PreguntasComponent;
  let fixture: ComponentFixture<Registrar.PreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrar.PreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrar.PreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
