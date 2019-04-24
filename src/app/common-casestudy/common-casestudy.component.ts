import { Component, OnInit, ViewChild, ElementRef, TemplateRef , HostListener} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router , ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-common-casestudy',
  templateUrl: './common-casestudy.component.html',
  styleUrls: ['./common-casestudy.component.css']
})
export class CommonCasestudyComponent implements OnInit {
  sections = {
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
  };
  CaseStudyDetaildata: any = {};
  bannnerBackGround: any;
  id: any;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 38) {
      const x = document.getElementsByClassName('section')[0].id;
      const temp = x.split('-');
      // tslint:disable-next-line:no-unused-expression
      if ( Number(temp[1]) > 1) {
        this.sections['section' + temp[1] ] = false;
        const temp2 = Number(temp[1]) - 1;
        this.sections['section' + temp2 ] = true;
        if ( temp2 === 1) {
          this.bannnerBackGround = this.CaseStudyDetaildata.banner.BannnerImage;
        }
      } else {
        this.router.navigateByUrl('KrypticMinds/AboutUs');
      }
    } else if (event.keyCode === 40) {
      const x = document.getElementsByClassName('section')[0].id;
      const temp = x.split('-');
      if (Number(temp[1]) < 6) {
      this.sections['section' + temp[1] ] = false;
      const temp2 = Number(temp[1]) + 1;
      this.sections['section' + temp2 ] = true;
      this.bannnerBackGround = ' ';
      } else {
        this.router.navigateByUrl('KrypticMinds/blog');
      }
    }
  }
  constructor(public router: Router, public gs: ApiService , private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.sections.section1 = true;
    this.CaseStudyDetail(this.id);
  }
  CaseStudyDetail(value) {
    const url = '/assets/json/caseStudy' + value + '.json';
    this.gs.localfileinfo(url)
    .subscribe(
      res => {
      this.CaseStudyDetaildata = res;
      this.bannnerBackGround = this.CaseStudyDetaildata.banner.BannnerImage;
       },
      e => {
      },
      () => {
      }
    );
  }

}
