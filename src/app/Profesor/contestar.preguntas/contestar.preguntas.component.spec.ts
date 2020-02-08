import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contestar.PreguntasComponent } from './contestar.preguntas.component';

describe('Contestar.PreguntasComponent', () => {
  let component: Contestar.PreguntasComponent;
  let fixture: ComponentFixture<Contestar.PreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contestar.PreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contestar.PreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
