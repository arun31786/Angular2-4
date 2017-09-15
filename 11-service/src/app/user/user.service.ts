import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public token:string;
  public name:string;
  public age: number;

  constructor() { }

}

