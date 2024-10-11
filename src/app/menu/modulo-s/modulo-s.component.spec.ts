import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloSComponent } from './modulo-s.component';

describe('ModuloSComponent', () => {
  let component: ModuloSComponent;
  let fixture: ComponentFixture<ModuloSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
