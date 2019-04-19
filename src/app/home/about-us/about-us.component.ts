import { Component, OnInit, ViewChild, ElementRef, TemplateRef , HostListener} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [
    trigger(
      'enterAnimation2', [
        transition(':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('1200ms', style({transform: 'scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
          style({position : 'relative' , left : '0', transform: 'scale(1)'}),
          animate('1200ms', style({ position : 'relative' , transform: 'scale(0)'}))
        ])
      ]
    ),
    trigger(
      'enterAnimation3', [
        transition(':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('1200ms', style({transform: 'scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'scale(1)'}),
          animate('1200ms', style({transform: 'scale(0)'}))
        ])
      ]
    ),
    trigger(
      'ParagraphText', [
        transition(':enter', [
          style({opacity: 0, 'margin-top': '80px'}),
          animate('500ms', style({opacity: 1, 'margin-top': '100px'}))
        ]),
        transition(':leave', [
          style({opacity: 1, 'margin-top': '100px'}),
          animate('500ms', style({opacity: 0, 'margin-top': '150px'}))
        ])
      ]
    ),
    trigger(
      'ParagraphText1', [
        transition(':enter', [
          style({opacity: 0, 'margin-top': '30px'}),
          animate('500ms', style({opacity: 1, 'margin-top': '50px'}))
        ]),
        transition(':leave', [
          style({opacity: 1, 'margin-top': '50px'}),
          animate('500ms', style({opacity: 0, 'margin-top': '80px'}))
        ])
      ]
    )
  ]
})
export class AboutUsComponent implements OnInit {
  data1 = true;
  data2 = false;
  showsecondDivImage: boolean;
  pragraph: boolean;
  showThirdDivImage: boolean;
  pragraph1: boolean;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 38) {
      if ( this.data1 === true) {
        this.router.navigateByUrl('/KrypticMinds/Home');
      } else {
         this.pragraph1 = false;
        setTimeout(() => {
          this.showThirdDivImage = false;
        }, 300);
          setTimeout(() => {
            this.data1 = true;
           this.data2 = false;
            this.pragraph = true;
          }, 1600);
          setTimeout(() => {
            this.showsecondDivImage = true;
          }, 300);
      }
    } else if (event.keyCode === 40) {
      if (this.data2 === true) {
        this.router.navigateByUrl('/KrypticMinds/CaseStudy/1');
      } else {
      this.pragraph = false;
      setTimeout(() => {
        this.showsecondDivImage = false;
      }, 300);
        setTimeout(() => {
          this.data1 = false;
          this.data2 = true;
          this.pragraph1 = true;
        }, 1600);
      setTimeout(() => {
        this.showThirdDivImage = true;
      }, 300);
    }
    }

  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.showsecondDivImage = true;
    setTimeout(() => {
      this.pragraph = true;
      }, 1000);
  }

}
