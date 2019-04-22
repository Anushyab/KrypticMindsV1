import { Component, OnInit, ViewChild, ElementRef, TemplateRef , HostListener} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 38) {
      this.router.navigateByUrl('KrypticMinds/CaseStudy/1');
    }
    if (event.keyCode === 40) {
    }
  }
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
