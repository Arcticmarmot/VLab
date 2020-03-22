import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDescribeComponent } from './project-describe.component';

describe('ProjectDescribeComponent', () => {
  let component: ProjectDescribeComponent;
  let fixture: ComponentFixture<ProjectDescribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDescribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
