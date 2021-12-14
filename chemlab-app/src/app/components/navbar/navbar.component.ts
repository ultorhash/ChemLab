import { Component, OnInit } from '@angular/core';
import { ILink } from './navbar-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: ILink[] = [
    { name: 'Home', path: '' },
    { name: 'Elements', path: 'elements' },
    { name: 'About us', path: 'about-us' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
