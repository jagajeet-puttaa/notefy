import { Component, OnInit } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  downloadPdf = faFilePdf;

  constructor() { }

  ngOnInit(): void {
  }

}
