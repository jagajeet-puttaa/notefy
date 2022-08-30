import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../fileupload.service';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file ?: File; // Variable to store file

    prasidha = false;

    fileName ?: string = "Please Upload a file"

    uploadOptions = [faUpload,faGoogleDrive]
  
    // Inject service 
    constructor(private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
    }
  
    // On file Select
    onChange(event: any) {
        this.file = event.target.files[0];
        this.prasidha = true;
        this.fileName = this.file?.name;
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);

        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }
  

}
