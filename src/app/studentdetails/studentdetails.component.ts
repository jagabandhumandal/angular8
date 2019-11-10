import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { STUDENTS } from '../mock-student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }
listofstudents = STUDENTS;

  public token = '';
  public studentData = '';
  public studentName = '';
  ngOnInit() {
   console.log(this.listofstudents);
   this.token = this.route.snapshot.paramMap.get('heroID');
   console.log(this.token);
   const tmpHero: any = _.find(this.listofstudents, (h) => h.id === JSON.parse(this.token));
   console.log(tmpHero);
   this.studentData = tmpHero;
   this.studentName = tmpHero.name;
  }
}
