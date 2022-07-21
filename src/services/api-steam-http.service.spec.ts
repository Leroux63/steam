import { TestBed } from '@angular/core/testing';

import { ClientSteamService } from './api-steam-http.service';

describe('ApiSteamHttpService', () => {
  let service: ClientSteamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSteamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
