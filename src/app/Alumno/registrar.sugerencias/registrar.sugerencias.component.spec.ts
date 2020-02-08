import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrar.SugerenciasComponent } from './registrar.sugerencias.component';

describe('Registrar.SugerenciasComponent', () => {
  let component: Registrar.SugerenciasComponent;
  let fixture: ComponentFixture<Registrar.SugerenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrar.SugerenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrar.SugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
