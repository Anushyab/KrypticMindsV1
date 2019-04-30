import {  ViewChild, ElementRef, TemplateRef , HostListener} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '/home/hashworks/KrypticMindsV1/src/app/api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  customOptions: any = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    slideBy: '4',
    // autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
     0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  teamdata: any;
  bannnerBackGround: any;
  arrayLength = 1;
  startPostion1 = 1;
  public innerWidth: any;
  // @HostListener('window:resize', ['$event'])
  //   onResize(event) {
  //     this.innerWidth = window.innerWidth;
  //   }
  constructor(public gs: ApiService, ) { }
  ngOnInit() {
    // console.log(this.customOptions.slideBy);
    // if(this.customOptions.slideBy==4)
    // console.log(4);
    this.innerWidth = window.innerWidth;
    this.teams();
  }

  getData(data) {
    // this.activeSlides = data;
    console.log('in getData', data);
    console.log('in s-l', data.slides.length);
    if ( this.innerWidth >= 320 && this.innerWidth <= 399)
    {
      this.startPostion1 = data.startPosition + 1;
      let val = (this.startPostion1 / this.arrayLength) * 100;
      console.log('val', val.toString());
      let x = document.getElementById('proId');
      x.style.width = val.toString() + '%';
    } else if (this.innerWidth >= 400 && this.innerWidth <= 1023)
    {
      let sp = data.startPosition + 3;
      let val = (sp / this.arrayLength) * 100;
      console.log('val', val.toString());
      let x = document.getElementById('proId');
      x.style.width = val.toString() + '%';
    } else if (this.innerWidth >= 1024 ) {
      let sp = data.startPosition + 4;
      let val = (sp / this.arrayLength) * 100;
      console.log('val', val.toString());
      let x = document.getElementById('proId');
      x.style.width = val.toString() + '%';
    }
    // if(data.startPosition == 4)
    // {
    //   console.log('inif');
    //   x.style.width = '100%';
    // }
    // else {
    //   x.style.width = '50%';
    // }
}
teams() {
  const url = '/assets/json/teamDetail.json';
    this.gs.localfileinfo(url)
    .subscribe(
      res => {
      this.teamdata = res['teamDetail'];
      this.arrayLength = Object.keys(this.teamdata).length;
     console.log('length-n', this.arrayLength);
      });
  }

}
