import { Component, OnInit } from '@angular/core';
import { faNeos } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo = faNeos;

  constructor() { }

  ngOnInit(): void {
  }

}
