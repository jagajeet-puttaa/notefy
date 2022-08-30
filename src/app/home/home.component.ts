import { Component, OnInit } from '@angular/core';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
// import { 1.svg } from "assets\images\1.svg";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name!: string;
  postData(){
    let url="http://127.0.0.1:8000/"
    this.http.post(url,{
      name:this.name}).toPromise().then((data:any)=>{
        console.log(data)
      })
    }
    
  

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



  constructor(private http :HttpClient) {}

  obj : any = [];


  send_data ={
    "add":"true",
    "obj":{
      "name":"putta",
      "dept":"cse",
      "age":"11",
      "from":"angular"
    }
  }
  ngOnInit(): void {
    this.obj=this.http.get("http://127.0.0.1:8000/" ).subscribe(data=>this.obj=data)

    this.obj=this.http.post("http://127.0.0.1:8000/",this.send_data ).subscribe(data=>this.obj=data)
  }
}
