import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: { name: string; description: string }[] = [
    {
      name: 'Web Developement',
      description:
        'We are having 6+ years of development experience in the web development. We are mainly working with Java and Javascript Scripting based Technologies.React Js, Angular Js, Full Stack developmet is our main interest area.',
    },
    {
      name: 'Mobile Developement',
      description:
        'We are having 6+ years of development experience in the web development. We are mainly working with Java and Javascript Scripting based Technologies.React Js, Angular Js, Full Stack developmet is our main interest area.',
    },
    {
      name: 'CMS Solutions',
      description:
        'We are having 6+ years of development experience in the web development. We are mainly working with Java and Javascript Scripting based Technologies.React Js, Angular Js, Full Stack developmet is our main interest area.',
    },
    {
      name: 'FREELANCING',
      description:
        'We are having 6+ years of development experience in the web development. We are mainly working with Java and Javascript Scripting based Technologies.React Js, Angular Js, Full Stack developmet is our main interest area.',
    },
    {
      name: 'It Consultancy',
      description:
        'We are having 6+ years of development experience in the web development. We are mainly working with Java and Javascript Scripting based Technologies.React Js, Angular Js, Full Stack developmet is our main interest area.',
    },
    {
      name: 'Software Support and Maintenance',
      description:
        'We are having 6+ years of development experience in the web development. We are mainly working with Java and Javascript Scripting based Technologies.React Js, Angular Js, Full Stack developmet is our main interest area.',
    },
  ];

  projectReports: { label: string; totals: string; icons: string }[] = [
    { label: 'Year of Experience', totals: '5+', icons: 'flag' },
    { label: 'Total projects', totals: '150+', icons: 'computer' },
    { label: 'Worldwide', totals: '65+', icons: 'language' },
    { label: 'Team members', totals: '50+', icons: 'groups' },
  ];
  ngOnInit(): void {}
}
