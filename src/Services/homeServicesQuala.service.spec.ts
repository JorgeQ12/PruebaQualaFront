/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeServicesQualaService } from './homeServicesQuala.service';

describe('Service: HomeServicesQuala', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeServicesQualaService]
    });
  });

  it('should ...', inject([HomeServicesQualaService], (service: HomeServicesQualaService) => {
    expect(service).toBeTruthy();
  }));
});
