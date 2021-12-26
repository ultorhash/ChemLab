import { Component, OnInit } from '@angular/core';
import { INavLink } from '../../interfaces/navbar.interface';
import { Icons } from '../../enums/icon.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: INavLink[] = [
    { name: 'Home', iconName: Icons.Home, path: '' },
    { name: 'Elements', iconName: Icons.ListAlt, path: 'elements' },
    { name: 'About us', iconName: Icons.People, path: 'about-us' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
