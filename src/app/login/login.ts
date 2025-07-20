import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [FormsModule]
})

export class Login {
  username = '';
  password = '';

  constructor(private http: HttpClient) {}

  login() {
    const payload = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/login', payload).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
      },
      error: (error) => {
        alert('Login failed. Please check your credentials.');
        console.error(error);
      }
    });
  }
}
