import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router, private http: HttpClient) {}
  handleClick(
    $event: any,
    name: string,
    email: string,
    password: string,
    cPassword: string
  ) {
    $event.preventDefault();
    console.log('HELLO');

    const headers = new HttpHeaders().set('Content-typ', 'application/json');

    const body = {
      name,
      email,
      password,
      password_confirmation: cPassword,
    };
    let token: any;

    this.http
      .post<{ token: string }>('http://127.0.0.1:8000/api/signup', body, {
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
    this.router.navigateByUrl('/login');
  }
}
