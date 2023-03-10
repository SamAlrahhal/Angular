import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompyComponent } from './compy.component';

describe('CompyComponent', () => {
  let component: CompyComponent;
  let fixture: ComponentFixture<CompyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
