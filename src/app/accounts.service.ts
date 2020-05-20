import { Injectable } from '@angular/core';
import { MYACCOUNTS } from './mock-accounts';
import { Account } from './account';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  getAccounts(): Observable<Account[]> {
    return of(MYACCOUNTS);
  }
}
