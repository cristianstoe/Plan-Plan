import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByInstrumentComponent } from './find-by-instrument.component';

describe('FindByInstrumentComponent', () => {
  let component: FindByInstrumentComponent;
  let fixture: ComponentFixture<FindByInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
