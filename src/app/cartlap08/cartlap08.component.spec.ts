import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartlap08Component } from './cartlap08.component';

describe('Cartlap08Component', () => {
  let component: Cartlap08Component;
  let fixture: ComponentFixture<Cartlap08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cartlap08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cartlap08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
