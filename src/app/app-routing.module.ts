import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { CaseStudyComponent } from './home/case-study/case-study.component';
import { CaseStudy1Component } from './home/case-study/case-study1/case-study1.component';
import { CaseStudy2Component } from './home/case-study/case-study2/case-study2.component';
import { BlogComponent } from './home/blog/blog.component';
import { CommonCasestudyComponent } from './common-casestudy/common-casestudy.component';

const routes: Routes = [
    {
        path: 'KrypticMinds',
        component: HomeComponent,
        children : [
            {  path: 'Home',
            component: HomePageComponent},
            {  path: 'AboutUs',
            component: AboutUsComponent},
            {  path: 'blog',
            component: BlogComponent},
            {  path: 'CaseStudy',
            component: CaseStudyComponent,
            children : [
                {  path: '1',
                component: CaseStudy1Component},
                {  path: '2',
                component: CaseStudy2Component},
                { path: '', redirectTo: '1', pathMatch: 'full'}
            ]
            },
            { path: '', redirectTo: 'Home', pathMatch: 'full'}
        ]
    },
    {
        path: 'commoncasestudy/:id',
        component: CommonCasestudyComponent,
    }
];
@NgModule({
    exports: [ RouterModule ],
    imports: [
      RouterModule.forRoot(routes, {useHash: true})
    ]
  })
  export class AppRoutingModule {

 }
