import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should not be loggedin', inject([UserService], (service: UserService) => {
    console.log(service.getUser().name)
    expect(service.isLoggedIn()).toBeFalsy();
  }));

  it('should be "Mark"', inject([UserService], (service: UserService) => {
    console.log(service.getUser().name)
    expect(service.getUser().name).toEqual("Mark");
  }));


});
