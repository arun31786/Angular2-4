import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isLoggedIn: boolean= false;
  public list:any[] = [];
  public username:string=null;
  
  constructor() { }


}
