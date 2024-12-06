import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PgBibliotecaAliancadosPage } from './pg-biblioteca-aliancados.page';

describe('PgBibliotecaAliancadosPage', () => {
  let component: PgBibliotecaAliancadosPage;
  let fixture: ComponentFixture<PgBibliotecaAliancadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PgBibliotecaAliancadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
