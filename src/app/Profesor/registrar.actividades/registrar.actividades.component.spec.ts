import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrar.ActividadesComponent } from './registrar.actividades.component';

describe('Registrar.ActividadesComponent', () => {
  let component: Registrar.ActividadesComponent;
  let fixture: ComponentFixture<Registrar.ActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrar.ActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrar.ActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
