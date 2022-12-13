import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantioComponent } from './add-plantio.component';

describe('AddPlantioComponent', () => {
  let component: AddPlantioComponent;
  let fixture: ComponentFixture<AddPlantioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlantioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
