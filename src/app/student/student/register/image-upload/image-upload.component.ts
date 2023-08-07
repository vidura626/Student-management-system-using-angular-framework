import {Component, Input} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'wije-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {


  @Input() formControlName!: string;
  @Input() btnName!: string;
  selectedImageURL: string | ArrayBuffer | null = null;

  constructor(private formBuilder: FormBuilder) {
  }

  onSelectedFile(image?: any) {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        this.selectedImageURL = e.target.result;
      }
      fileReader.readAsDataURL(image);
    }

}
