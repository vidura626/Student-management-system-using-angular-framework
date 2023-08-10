import {Component, Input} from '@angular/core';
import {CourseCardInterface} from "../../course-card-interface";

@Component({
  selector: 'wije-course-card-container',
  templateUrl: './course-card-container.component.html',
  styleUrls: ['./course-card-container.component.css']
})
export class CourseCardContainerComponent {
  @Input() courses!:CourseCardInterface[];
}
