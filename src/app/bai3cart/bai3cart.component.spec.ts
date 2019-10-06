import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3cartComponent } from './bai3cart.component';

describe('Bai3cartComponent', () => {
  let component: Bai3cartComponent;
  let fixture: ComponentFixture<Bai3cartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai3cartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai3cartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
