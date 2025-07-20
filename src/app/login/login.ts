import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html',
})
export class Login {
  username = '';
  message = '';

  constructor(private http: HttpClient) {}

  loading = false;

  login() {
    this.loading = true;
    this.message = '';
    this.http.post<any>('/api/login', { username: this.username.trim() }).subscribe({
      next: res => {
        this.message = res.response === 'logged-in'
          ? `Welcome, ${res.username}!`
          : 'Invalid username';
      },
      error: () => {
        this.message = 'Server error';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

}
