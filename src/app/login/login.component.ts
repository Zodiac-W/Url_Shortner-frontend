import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {}

  handleClick($event: any, email: string, password: string) {
    $event.preventDefault();
    console.log('HELLO');
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    const body = {
      email,
      password,
    };
    let token: any = {};

    this.http
      .post<{ token: string }>('http://127.0.0.1:8000/api/login', body, {
        headers,
      })
      .subscribe((response) => {
        console.log(response);
        token = response;
        console.log(token.token);
        localStorage.setItem('token', token.token);
      });
    console.log('hello');
  }

  handleRoute() {
    this.router.navigateByUrl('/signup');
  }
}
