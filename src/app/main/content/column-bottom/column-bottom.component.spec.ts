import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnBottomComponent } from './column-bottom.component';

describe('ColumnBottomComponent', () => {
  let component: ColumnBottomComponent;
  let fixture: ComponentFixture<ColumnBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
