import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap08Component } from './lap08.component';

describe('Lap08Component', () => {
  let component: Lap08Component;
  let fixture: ComponentFixture<Lap08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
