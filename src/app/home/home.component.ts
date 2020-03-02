import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  withdrawal(){
    this.router.navigate(['withdrawal']);
  }

  deposit(){
    this.router.navigate(['deposits']);
  }

  balance(){
    this.router.navigate(['balances']);
  }

}
