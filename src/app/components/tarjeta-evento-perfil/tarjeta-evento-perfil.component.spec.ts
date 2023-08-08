import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEventoPerfilComponent } from './tarjeta-evento-perfil.component';

describe('TarjetaEventoPerfilComponent', () => {
  let component: TarjetaEventoPerfilComponent;
  let fixture: ComponentFixture<TarjetaEventoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaEventoPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaEventoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
