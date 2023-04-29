import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface role {
  label: string;
  value: string;
}

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ApplyNowComponent implements OnInit {
  applyForm!: FormGroup;
  position: role[] = [
    { label: 'Angular Developer', value: 'angular' },
    { label: 'Java Developer', value: 'java' },
    { label: 'React JS Developer', value: 'react' },
    { label: 'Node JS Developer', value: 'node' },
    { label: 'Intern', value: 'itern' },
    { label: 'Fresher', value: 'fresher' },
  ];
  selectedRole!: role | undefined;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.selectedRole = this.position.find((data: role) => {
        return data?.value === params['role'];
      });
    });
    this.initForm();
  }

  initForm() {
    this.applyForm = this.fb.group({
      fullName: ['', Validators.required],
      email_id: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      position: ['', Validators.required],
      mobile_no: [
        '',
        Validators.compose([
          Validators.pattern(
            /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[123456789]\d{9}$/
          ),
          Validators.required,
        ]),
      ],
      attached_resume: ['', Validators.required],
      recaptcha: ['', Validators.required],
    });
  }

  OnSubmit() {}
}
