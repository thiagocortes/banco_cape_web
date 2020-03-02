import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/cases', title: 'Casos',  icon:'card_travel', class: '' },
    { path: '/locators', title: 'Localizadores',  icon:'people', class: '' },
    { path: '/diligences', title: 'Diligências',  icon:'public', class: '' },
    { path: '/partners', title: 'Parceiros',  icon:'assignment_ind', class: '' },
    { path: '/login', title: 'Sair',  icon:'exit_to_app', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  user = '';

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.getUser();
  }
  getUser(){
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
