import { Component, OnInit } from '@angular/core';
import { faTwitter,faWhatsapp,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  brands = [faTwitter,faWhatsapp,faInstagram,faFacebook]

  constructor() { }

  ngOnInit(): void {
  }

}
