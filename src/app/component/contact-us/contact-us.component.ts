import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as d3 from 'd3';

interface contactInfo {
  label: string;
  icon: string;
  descriptionDetails: string;
  routerlink: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  contactInfo!: contactInfo[];
  socialMedia = [
    { label: 'facebook', icon: 'fa-facebook-square', routerlink: 'Home' },
    { label: 'twitter', icon: 'fa-twitter-square', routerlink: 'hireUs' },
    { label: 'instagram', icon: 'fa-instagram', routerlink: 'portfolio' },
    { label: 'linkedin', icon: 'fa-linkedin-square', routerlink: 'services' },
  ];

  selectedItem:string = 'adajanBranch';
  @ViewChild('chart') chart!:ElementRef;
  @ViewChild('mapSection') mapSection!:ElementRef;
  @ViewChild('addressSection') addressSection!:ElementRef;
  @ViewChild('addressSection2') addressSection2!:ElementRef;

  public parentElement: any;
  public parent: any;
  public svg: any;




  ngOnInit(): void {
    this.initForm();

    this.contactInfo = [
      {
        label: 'contact no.',
        icon: 'call',
        descriptionDetails: '+91 98798 67255',
        routerlink: 'tel:+91 9879867255',
      },
      {
        label: 'mail',
        icon: 'mail',
        descriptionDetails: 'info@JyotiTechnosoft.com',
        routerlink: 'mailto:info@JyotiTechnosoft.com',
      },
      {
        label: 'Address',
        icon: 'location_on',
        descriptionDetails:
          "228, Second Floor, Green Elina, Nr. Sneh Sankul's Vadi, Anand Mahal Rd, Giriraj Society, Adajan, Surat 395009, Gujarat, India",
        routerlink: '',
      },
    ];
  }
  ngAfterViewInit() { 
    // this.parentElement = this.chart?.nativeElement;
    // this.parent = d3.select(this.parentElement);
    // this.svg = this.parent.append("svg")
    // this.svg.append("line")          // attach a line
    // .attr('position', 'absolute')
    // .style("stroke", "black")  // colour the line
    // .attr("x1", 50)     // x position of the first end of the line
    // .attr("y1", 50)      // y position of the first end of the line
    // .attr("x2", 100)     // x position of the second end of the line
    // .attr("y2", 100);
  }

  initForm() {
    this.contactUsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      emailAddress: ['', Validators.email],
      subject: ['', [Validators.required, Validators.maxLength(30)]],
      mobileNo: [
        '',
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ],
      description: ['', [Validators.required, Validators.maxLength(250)]],
      recaptcha: ['', Validators.required],
    });
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
