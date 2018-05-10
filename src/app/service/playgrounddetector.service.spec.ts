import { TestBed, inject } from '@angular/core/testing';

import { PlaygrounddetectorService } from './playgrounddetector.service';

describe('PlaygrounddetectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaygrounddetectorService]
    });
  });

  it('should be created', inject([PlaygrounddetectorService], (service: PlaygrounddetectorService) => {
    expect(service).toBeTruthy();
  }));
});
