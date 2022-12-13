import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantioComponent } from './list-plantio.component';

describe('ListPlantioComponent', () => {
  let component: ListPlantioComponent;
  let fixture: ComponentFixture<ListPlantioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlantioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlantioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
