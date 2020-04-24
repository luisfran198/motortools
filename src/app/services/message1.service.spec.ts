import { TestBed } from '@angular/core/testing';

import { Message1Service } from './message1.service';

describe('Message1Service', () => {
  let service: Message1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Message1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
