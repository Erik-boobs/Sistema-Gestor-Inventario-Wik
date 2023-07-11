import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesVentaComponent } from './reportes-venta.component';

describe('ReportesVentaComponent', () => {
  let component: ReportesVentaComponent;
  let fixture: ComponentFixture<ReportesVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
