import { Component, OnInit, ViewChild, ElementRef, TemplateRef , HostListener} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

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
      } else {
        this.router.navigateByUrl('KrypticMinds/blog');
      }
    }
  }
  constructor(public router: Router) { }

  ngOnInit() {
    this.sections.section1 = true;
  }

}
