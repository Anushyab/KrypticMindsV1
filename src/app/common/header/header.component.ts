import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger(
      'headerText', [
        transition(':enter', [
          style({opacity: 0, 'margin-top': '-10px'}),
          animate('500ms', style({opacity: 1, 'margin-top': '0px'}))
        ])
      ]
    ),
  ]
})
export class HeaderComponent implements OnInit {
  selected: 'Home';
  headerText: boolean;
  constructor() { }

  ngOnInit() {
    this.selected = 'Home';
    this.headerText = true;
  }
  navDropDown() {
    let x = document.getElementById('sidebar-menu');
    if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
  }
  disableScreen() {
    let x = document.getElementById('sidebar-menu');
    x.style.display = 'none';
  }
}
