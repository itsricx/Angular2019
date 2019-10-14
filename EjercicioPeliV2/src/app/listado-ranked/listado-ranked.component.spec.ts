import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRankedComponent } from './listado-ranked.component';

describe('ListadoRankedComponent', () => {
  let component: ListadoRankedComponent;
  let fixture: ComponentFixture<ListadoRankedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRankedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRankedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
