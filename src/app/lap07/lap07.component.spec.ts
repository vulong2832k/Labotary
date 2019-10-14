import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap07Component } from './lap07.component';

describe('Lap07Component', () => {
  let component: Lap07Component;
  let fixture: ComponentFixture<Lap07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
