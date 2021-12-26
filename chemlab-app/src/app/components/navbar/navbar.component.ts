import { Component, OnInit } from '@angular/core';
import { INavLink, ISettings } from '../../interfaces/navbar.interface';
import { links, settings } from './navbar.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menuLinks: INavLink[] = links;
  public menuSettings: ISettings[] = settings;

  constructor() { }

  ngOnInit(): void {

  }
}
