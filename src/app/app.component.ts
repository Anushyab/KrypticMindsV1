import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.router.navigateByUrl('/KrypticMinds/Home');
    console.log('test');
  }

}
