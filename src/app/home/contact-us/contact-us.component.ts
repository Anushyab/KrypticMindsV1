import { Component, OnInit , HostListener} from '@angular/core';
import { ApiService } from '/home/hashworks/KrypticMindsV1/src/app/api.service';
import { EmailService } from '/home/hashworks/KrypticMindsV1/src/app/email.service';
import { Router } from '@angular/router';
export interface Model {
  name: string;
  email: string;
  companyName: string;
  comment: string;
 }
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  model: Model = {
    name: '',
    email: '',
    companyName: '',
    comment: ''
  };
  nameClicked = false;
  companyClicked = false;
  emailClicked = false;
  messageClicked = false;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 38) {
      this.router.navigateByUrl('KrypticMinds/Team');
    }
    if (event.keyCode === 40) {
      this.router.navigateByUrl('/KrypticMinds/Home');
    }
  }
  constructor(private _emailService: EmailService, public router: Router, ) { }
  ngOnInit() {
  }
  customerDetails()
  {
    // console.log(this.model.name);
    // console.log(this.model.email);
    // console.log(this.model.companyName);
    // console.log(this.model.comment);
    this._emailService.emailSubmit(this.model).subscribe(
      function(data) {
        console.log(data);
      },
      function (error) {
        console.log(error);
      }
    );

  }
  isClicked()
  {
    this.nameClicked = true;
    this. companyClicked = false;
    this.emailClicked = false;
    this.messageClicked = false;
  }
   isClicked1()
   {
     this. companyClicked = true;
     this.nameClicked = false;
     this.emailClicked = false;
     this.messageClicked = false;
   }
   isClicked2()
   {
     this.emailClicked = true;
      this.nameClicked = false;
    this. companyClicked = false;
    this.messageClicked = false;
   }
   isClicked3()
   {
     this.messageClicked = true;
      this.emailClicked = false;
      this.nameClicked = false;
    this. companyClicked = false;
   }
}
