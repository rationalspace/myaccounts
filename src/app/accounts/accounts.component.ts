import { Component, OnInit } from '@angular/core';
import { MYACCOUNTS } from '../mock-accounts';
import { Account } from '../account';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  myaccounts:Account[];
  constructor(private AccountsService: AccountsService) { }

  ngOnInit(): void {
    this.getAccounts();
  }
  getAccounts(): void {
    this.AccountsService.getAccounts()
      .subscribe(accounts => this.myaccounts = accounts);
  }
}
