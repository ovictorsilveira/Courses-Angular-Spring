import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['name','category'];

  constructor(
    private httpClient: HttpClient,
    private coursesService:CoursesService
    ) {

      this.courses = this.coursesService.list()
  }


  ngOnInit(): void {
  }

}
