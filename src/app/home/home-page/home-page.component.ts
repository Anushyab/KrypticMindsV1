import { Component, OnInit, ViewChild, ElementRef, TemplateRef , HostListener} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger(
      'showText', [
        transition(':enter', [
          style({top: '35%' , opacity: 0}),
          animate('500ms', style({top: '40%', opacity: 1}))
        ]),
        transition(':leave', [
          style({ top: '40%', opacity: 1}),
          animate('500ms', style({top: '45%' , opacity: 0}))
        ])
      ]
    ),
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('1200ms', style({transform: 'scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
        ])
      ]
    ),
  ]
})
export class HomePageComponent implements OnInit {
  show = false;
  textshow: boolean;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 38) {
      this.router.navigateByUrl('/KrypticMinds/Home');
    } else if (event.keyCode === 40) {
      this.router.navigateByUrl('/KrypticMinds/AboutUs');
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.show = true;
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.textshow = true;
   }, 1000);
  }

}
