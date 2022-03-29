import { Component, OnInit } from '@angular/core';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
// import { 1.svg } from "assets\images\1.svg";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uploadOptions = [faUpload,faGoogleDrive]

  features = [
    {
      id : 1,
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste earum dignissimos cupiditate voluptates dolore.",
      src : "assets/images/1.svg"
    },
    {
      id : 2,
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste earum dignissimos cupiditate voluptates dolore.",
      src : "assets/images/2.svg"
    },
    {
      id : 3,
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste earum dignissimos cupiditate voluptates dolore.",
      src : "assets/images/3.svg"
    },
    {
      id : 4,
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste earum dignissimos cupiditate voluptates dolore.",
      src : "assets/images/4.svg"
    },
    {
      id : 5,
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste earum dignissimos cupiditate voluptates dolore.",
      src : "assets/images/5.svg"
    },
    {
      id : 6,
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste earum dignissimos cupiditate voluptates dolore.",
      src : "assets/images/6.svg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
