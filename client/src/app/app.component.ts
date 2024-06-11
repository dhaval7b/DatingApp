import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private accountService: AccountService ){}


  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }
  title = 'client';

  users?: any;

  getUsers(){
    this.http.get("http://localhost:5000/api/users").subscribe({
      next: response => this.users = response
    }

    );
  }

  setCurrentUser(){
    const user = JSON.parse(localStorage.getItem('user')!);
    this.accountService.setCurrentUser(user);
  }
}
