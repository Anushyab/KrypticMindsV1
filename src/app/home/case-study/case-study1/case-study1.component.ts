import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-case-study1',
  templateUrl: './case-study1.component.html',
  styleUrls: ['./case-study1.component.css']
})
export class CaseStudy1Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  routeCommonCaseStudy() {
      this.router.navigateByUrl('/commoncasestudy');
  }
}
