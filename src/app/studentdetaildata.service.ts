import { Injectable } from '@angular/core';
import { STUDENTS } from './mock-student';
import { Student } from './student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentdetaildataService {

  constructor() { }

  getStudents(): Student[] {
    return STUDENTS;
  }
}
