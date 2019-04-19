import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCasestudyComponent } from './common-casestudy.component';

describe('CommonCasestudyComponent', () => {
  let component: CommonCasestudyComponent;
  let fixture: ComponentFixture<CommonCasestudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCasestudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCasestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
