import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRecientesComponent } from './listado-recientes.component';

describe('ListadoRecientesComponent', () => {
  let component: ListadoRecientesComponent;
  let fixture: ComponentFixture<ListadoRecientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRecientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
