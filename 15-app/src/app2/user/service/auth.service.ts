import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public isLoggedIn: boolean= false;
  public list:any[] = [];
  constructor() { }

}
