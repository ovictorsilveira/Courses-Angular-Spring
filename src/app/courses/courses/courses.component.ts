import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

  constructor(
    private httpClient: HttpClient,
    private coursesService:CoursesService,
    public dialog:MatDialog

    ) {

      this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error =>  {
          this.onError('Erro ao carregar cursos.')
          return of ([])
        })
      );
  }

  onError(ErrorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: ErrorMsg
    });
  }


  ngOnInit(){}

}
