import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public get name() {
    if (localStorage.getItem('name')) {
      return localStorage.getItem('name');
    } else {
      return 'to our app';
    }
  }
  Fname: string = 'Mostafa';
}
