import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolturaComponent } from './cooltura.component';

describe('CoolturaComponent', () => {
  let component: CoolturaComponent;
  let fixture: ComponentFixture<CoolturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
