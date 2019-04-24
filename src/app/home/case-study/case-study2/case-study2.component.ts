import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-case-study2',
  templateUrl: './case-study2.component.html',
  styleUrls: ['./case-study2.component.css']
})
export class CaseStudy2Component implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit() {
  }
  routeCommonCaseStudy() {
      this.router.navigateByUrl('/commoncasestudy/2');
  }
}
