import { Component, OnInit } from '@angular/core';
import { ILink } from './navbar-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: ILink[] = [
    { name: 'Home', path: '', icon: "home" },
    { name: 'Elements', path: 'elements', icon: "bubble_chart" },
    { name: 'About us', path: 'about-us', icon: "group" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
