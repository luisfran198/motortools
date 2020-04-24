import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajacnComponent } from './trabajacn.component';

describe('TrabajacnComponent', () => {
  let component: TrabajacnComponent;
  let fixture: ComponentFixture<TrabajacnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajacnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajacnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
