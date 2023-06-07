import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-url-shorten',
  templateUrl: './url-shorten.component.html',
  styleUrls: ['./url-shorten.component.css'],
})
export class UrlShortenComponent {
  constructor(private http: HttpClient) {}

  handleClick($event: any, url: string, value: string) {
    $event.preventDefault();
    console.log('HELLO');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-type', 'application/json');

    const body = {
      url,
      key: 'shorten',
      value,
    };

    let res: any;
    let newUrl: string = 'Your new URL: ';

    this.http
      .post<{ res: string }>('http://127.0.0.1:8000/api/shorten', body, {
        headers,
      })
      .subscribe((response) => {
        console.log(response);
        res = response;
        console.log(res.newUrl);
        this.name = newUrl + res.newUrl;
      });
  }

  // name: string = 'Your new URL: ssss';
  name: string = '';
}
