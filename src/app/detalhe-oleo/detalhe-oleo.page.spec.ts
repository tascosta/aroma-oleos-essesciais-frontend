import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { detalheOleoPageRoutingModule } from './detalhe-oleo-routing.module';
import { DetalheOleoPage } from './detalhe-oleo.page';

describe('DetalheOleoPage', () => {
  let component: DetalheOleoPage;
  let fixture: ComponentFixture<DetalheOleoPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DetalheOleoPage],
      imports: [IonicModule.forRoot(), detalheOleoPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheOleoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
