import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdfModalPage } from './pdf-modal.page';

describe('PdfModalPage', () => {
  let component: PdfModalPage;
  let fixture: ComponentFixture<PdfModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
