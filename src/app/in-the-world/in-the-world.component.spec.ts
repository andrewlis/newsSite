import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheWorldComponent } from './in-the-world.component';

describe('InTheWorldComponent', () => {
  let component: InTheWorldComponent;
  let fixture: ComponentFixture<InTheWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTheWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTheWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
