import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detaillap08Component } from './detaillap08.component';

describe('Detaillap08Component', () => {
  let component: Detaillap08Component;
  let fixture: ComponentFixture<Detaillap08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detaillap08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detaillap08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
