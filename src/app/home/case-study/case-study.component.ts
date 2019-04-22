import { Component, OnInit, ViewChild, ElementRef, TemplateRef , HostListener} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {
  first: boolean;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 38) {
      if (this.first) {
        this.router.navigateByUrl('/KrypticMinds/AboutUs');
      } else {
        this.router.navigateByUrl('KrypticMinds/CaseStudy/1');
        this.first = true;
      }
    }
    if (event.keyCode === 40) {
      if (this.first) {
        this.router.navigateByUrl('KrypticMinds/CaseStudy/2');
        this.first = false;
      } else {
        this.router.navigateByUrl('KrypticMinds/blog');
      }
    }
  }
  constructor(public router: Router) { }

  ngOnInit() {
    this.first = true;
  }
  getValue(value) {
    if (value === 1) {
     this.first = true;
     this.router.navigateByUrl('KrypticMinds/CaseStudy/1');
    } else {
      this.first = false;
      this.router.navigateByUrl('KrypticMinds/CaseStudy/2');
    }
  }
}
