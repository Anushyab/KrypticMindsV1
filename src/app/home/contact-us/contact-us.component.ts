import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  model = {
    name: '',
    email: '',
    companyName: '',
    comment: ''
  };
  nameClicked = false;
  companyClicked = false;
  emailClicked = false;
  messageClicked = false;
  constructor() { }
  ngOnInit() {
  }
  customerDetails()
  {
    console.log(this.model.name);
    console.log(this.model.email);
    console.log(this.model.companyName);
    console.log(this.model.comment);
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
