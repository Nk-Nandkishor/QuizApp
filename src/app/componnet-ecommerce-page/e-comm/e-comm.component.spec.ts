import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommComponent } from './e-comm.component';

describe('ECommComponent', () => {
  let component: ECommComponent;
  let fixture: ComponentFixture<ECommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
