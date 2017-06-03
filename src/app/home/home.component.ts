import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  //If you want to route to a different route during an event you can inject the router
  onLoadServers(){
   this.router.navigate(['/servers']);
  }

  ngOnInit() {
  }

}
