import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGeneratorViewComponent } from './report-generator-view.component';

describe('ReportGeneratorViewComponent', () => {
  let component: ReportGeneratorViewComponent;
  let fixture: ComponentFixture<ReportGeneratorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGeneratorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGeneratorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
