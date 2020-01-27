import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnCenterComponent } from './column-center.component';

describe('ColumnCenterComponent', () => {
  let component: ColumnCenterComponent;
  let fixture: ComponentFixture<ColumnCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
