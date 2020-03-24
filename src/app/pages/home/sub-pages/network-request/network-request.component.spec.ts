import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkRequestComponent } from './network-request.component';

describe('NetworkRequestComponent', () => {
  let component: NetworkRequestComponent;
  let fixture: ComponentFixture<NetworkRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
