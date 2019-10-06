import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChangeBaitapComponent } from './nav-change-baitap.component';

describe('NavChangeBaitapComponent', () => {
  let component: NavChangeBaitapComponent;
  let fixture: ComponentFixture<NavChangeBaitapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavChangeBaitapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavChangeBaitapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
