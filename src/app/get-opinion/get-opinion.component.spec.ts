import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOpinionComponent } from './get-opinion.component';

describe('GetOpinionComponent', () => {
  let component: GetOpinionComponent;
  let fixture: ComponentFixture<GetOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
