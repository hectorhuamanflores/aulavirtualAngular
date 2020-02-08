import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrar.ContenidoComponent } from './registrar.contenido.component';

describe('Registrar.ContenidoComponent', () => {
  let component: Registrar.ContenidoComponent;
  let fixture: ComponentFixture<Registrar.ContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrar.ContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrar.ContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
