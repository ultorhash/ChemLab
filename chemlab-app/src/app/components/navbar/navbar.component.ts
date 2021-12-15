import { Component, OnInit } from '@angular/core';
import { INavLink } from '../../interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: INavLink[] = [
    { name: 'Home', iconName: 'home', path: '' },
    { name: 'Elements', iconName: 'list_alt', path: 'elements' },
    { name: 'About us', iconName: 'people', path: 'about-us' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
