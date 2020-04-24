import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnclajeComponent } from './anclaje.component';

describe('AnclajeComponent', () => {
  let component: AnclajeComponent;
  let fixture: ComponentFixture<AnclajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnclajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnclajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
