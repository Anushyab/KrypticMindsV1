import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudy2Component } from './case-study2.component';

describe('CaseStudy2Component', () => {
  let component: CaseStudy2Component;
  let fixture: ComponentFixture<CaseStudy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
