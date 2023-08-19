import {Component} from '@angular/core';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wije-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.css']
})
export class CourseHeaderComponent {
  faCoffee = faCartPlus;
  cartItemCount: number = 0;

}
