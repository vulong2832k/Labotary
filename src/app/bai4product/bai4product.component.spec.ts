import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai4productComponent } from './bai4product.component';

describe('Bai4productComponent', () => {
  let component: Bai4productComponent;
  let fixture: ComponentFixture<Bai4productComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai4productComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai4productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
