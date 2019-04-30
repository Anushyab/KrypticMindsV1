import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HeaderComponent } from './common/header/header.component';
import { CommonComponent } from './common/common.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CaseStudyComponent } from './home/case-study/case-study.component';
import { CaseStudy1Component } from './home/case-study/case-study1/case-study1.component';
import { CaseStudy2Component } from './home/case-study/case-study2/case-study2.component';
import { BlogComponent } from './home/blog/blog.component';
import { CommonCasestudyComponent } from './common-casestudy/common-casestudy.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './api.service';
import { TeamComponent } from './home/team/team.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    HeaderComponent,
    CommonComponent,
    AboutUsComponent,
    CaseStudyComponent,
    CaseStudy1Component,
    CaseStudy2Component,
    BlogComponent,
    CommonCasestudyComponent,
    TeamComponent,
    ContactUsComponent,
    // CarouselHolderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
