import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../db/course.service";

@Component({
  selector: 'wije-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CoursesComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private courseService: CourseService) {
  }
}
