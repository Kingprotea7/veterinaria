import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloPComponent } from './modulo-p.component';

describe('ModuloPComponent', () => {
  let component: ModuloPComponent;
  let fixture: ComponentFixture<ModuloPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
