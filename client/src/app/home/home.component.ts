import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerMode: any = false;
  users: any;
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getUsers();
  }
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
  getUsers(){
    this.http.get("http://localhost:5000/api/users").subscribe({
      next: response => this.users = response
    }

    );
  }
}
