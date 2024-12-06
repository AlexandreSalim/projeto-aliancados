import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PgVivendoEmAliancaPage } from './pg-vivendo-em-alianca.page';

describe('PgVivendoEmAliancaPage', () => {
  let component: PgVivendoEmAliancaPage;
  let fixture: ComponentFixture<PgVivendoEmAliancaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PgVivendoEmAliancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
