import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechFrameworkComponent } from './tech-framework.component';

describe('TechFrameworkComponent', () => {
  let component: TechFrameworkComponent;
  let fixture: ComponentFixture<TechFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
