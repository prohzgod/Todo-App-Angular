import { TestBed } from '@angular/core/testing';

import { SidebarButtonService } from './sidebar-button.service';

describe('SidebarButtonService', () => {
  let service: SidebarButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
