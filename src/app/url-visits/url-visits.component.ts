import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-url-visits',
  templateUrl: './url-visits.component.html',
  styleUrls: ['./url-visits.component.css'],
})
export class UrlVisitsComponent {
  constructor(private http: HttpClient) {}

  handleClick($event: any, url: string) {
    $event.preventDefault();
    console.log('HELLO');
    const token = localStorage.getItem('token');
    const parts = url.split('/');
    const value = parts.pop();
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-type', 'application/json');
    const body = {
      value,
    };

    let res: any;
    let newVisits: string = 'Your URL total visits: ';
    console.log(value);
    this.http
      .post<{ res: string }>('http://127.0.0.1:8000/api/visits', body, {
        headers,
      })
      .subscribe((response) => {
        console.log(response);
        res = response;
        console.log(res.visits);
        this.visits = newVisits + res.visits;
      });
  }

  visits: string = '';
}
