import { INavLink } from "src/app/interfaces/navbar.interface";
import { ISettings } from '../../interfaces/navbar.interface';

export const links: INavLink[] = [
  { name: 'Home', path: '' },
  { name: 'Elements', path: 'elements' },
  { name: 'About us', path: 'about-us' }
];

export const settings: ISettings[] = [
  { name: 'Login', icon: 'login' },
  { name: 'Settings', icon: 'settings' },
]