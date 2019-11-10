import { Component, OnInit , Input } from '@angular/core';
// import { Student } from '../student';
import { Router } from '@angular/router';
// import { STUDENTS } from '../mock-student';
import { Student } from '../student';
import { StudentdetaildataService } from '../studentdetaildata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // hero: Student = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  STUDENTS: any;

  constructor( public router: Router, private studentService: StudentdetaildataService) { }

  ngOnInit() {
    this.getStudents();
  }

  onSelect(hero: any) {
    this.router.navigateByUrl('/Studentdetails/' + hero.id );
  }

  getStudents(): void {
    this.STUDENTS = this.studentService.getStudents();
  }
}
