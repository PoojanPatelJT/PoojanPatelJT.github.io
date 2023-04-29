import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Career } from '@app/component/career/career';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  selectedCareer!: Career;
  careers: Career[] = [
    {
      position: { label: 'React JS Developer', id: 'react' },
      experience: 'Exp. 1.6 Years minimum',
      requireLang: ['React JS', 'Bootstrap', 'CSS', 'Javascript', 'Web Pack'],
      role: [
        {
          label: 'Role and Responsibilities :',
          objectives: [
            {
              responsiblity:
                'Developing new user-facing features using React.js',
            },
            {
              responsiblity:
                'Building reusable components and front-end libraries for future use',
            },
            {
              responsiblity:
                'Translating designs and wireframes into high-quality code',
            },
            {
              responsiblity:
                'Optimizing components for maximum performance across a vast array of web-capable devices and browsers Optimizing components for maximum performance across a vast array of web-capable devices and browsers',
            },
            {
              responsiblity:
                'Coordinating with various teams working on distinct layers',
            },
          ],
        },
        {
          label: 'Required Skills :',
          objectives: [
            {
              responsiblity:
                'Thorough understanding of React.js and its core principles',
            },
            { responsiblity: 'Knowledge of React Routing' },
            {
              responsiblity:
                'Knowledge of state management techniques like Redux/Flux, Context, etc',
            },
            {
              responsiblity:
                'Familiarity with modern front-end build pipelines and tools',
            },
          ],
        },
        {
          label: 'Nice to have :',
          objectives: [
            { responsiblity: 'Experience with Git and Bitbucket' },
            { responsiblity: 'Knowledge of Isomorphic React' },
            { responsiblity: 'Experience with node and MongoDB' },
          ],
        },
        {
          label: 'Qualification :',
          objectives: [
            {
              responsiblity:
                'B.E/B.Tech in Computer Science, Engineering or a related field',
            },
          ],
        },
      ],
    },
    {
      position: { label: 'Angular JS Developer', id: 'react' },
      experience: 'Exp. 1.6 Years minimum',
      requireLang: ['React JS', 'Bootstrap', 'CSS', 'Javascript', 'Web Pack'],
      role: [
        {
          label: 'Role and Responsibilities :',
          objectives: [
            {
              responsiblity:
                'Developing new user-facing features using React.js',
            },
            {
              responsiblity:
                'Building reusable components and front-end libraries for future use',
            },
            {
              responsiblity:
                'Translating designs and wireframes into high-quality code',
            },
            {
              responsiblity:
                'Optimizing components for maximum performance across a vast array of web-capable devices and browsers Optimizing components for maximum performance across a vast array of web-capable devices and browsers',
            },
            {
              responsiblity:
                'Coordinating with various teams working on distinct layers',
            },
          ],
        },
        {
          label: 'Required Skills :',
          objectives: [
            {
              responsiblity:
                'Thorough understanding of React.js and its core principles',
            },
            { responsiblity: 'Knowledge of React Routing' },
            {
              responsiblity:
                'Knowledge of state management techniques like Redux/Flux, Context, etc',
            },
            {
              responsiblity:
                'Familiarity with modern front-end build pipelines and tools',
            },
          ],
        },
        {
          label: 'Nice to have :',
          objectives: [
            { responsiblity: 'Experience with Git and Bitbucket' },
            { responsiblity: 'Knowledge of Isomorphic React' },
            { responsiblity: 'Experience with node and MongoDB' },
          ],
        },
        {
          label: 'Qualification :',
          objectives: [
            {
              responsiblity:
                'B.E/B.Tech in Computer Science, Engineering or a related field',
            },
          ],
        },
      ],
    },
    {
      position: { label: 'Node JS Developer', id: 'react' },
      experience: 'Exp. 1.6 Years minimum',
      requireLang: ['React JS', 'Bootstrap', 'CSS', 'Javascript', 'Web Pack'],
      role: [
        {
          label: 'Role and Responsibilities :',
          objectives: [
            {
              responsiblity:
                'Developing new user-facing features using React.js',
            },
            {
              responsiblity:
                'Building reusable components and front-end libraries for future use',
            },
            {
              responsiblity:
                'Translating designs and wireframes into high-quality code',
            },
            {
              responsiblity:
                'Optimizing components for maximum performance across a vast array of web-capable devices and browsers Optimizing components for maximum performance across a vast array of web-capable devices and browsers',
            },
            {
              responsiblity:
                'Coordinating with various teams working on distinct layers',
            },
          ],
        },
        {
          label: 'Required Skills :',
          objectives: [
            {
              responsiblity:
                'Thorough understanding of React.js and its core principles',
            },
            { responsiblity: 'Knowledge of React Routing' },
            {
              responsiblity:
                'Knowledge of state management techniques like Redux/Flux, Context, etc',
            },
            {
              responsiblity:
                'Familiarity with modern front-end build pipelines and tools',
            },
          ],
        },
        {
          label: 'Nice to have :',
          objectives: [
            { responsiblity: 'Experience with Git and Bitbucket' },
            { responsiblity: 'Knowledge of Isomorphic React' },
            { responsiblity: 'Experience with node and MongoDB' },
          ],
        },
        {
          label: 'Qualification :',
          objectives: [
            {
              responsiblity:
                'B.E/B.Tech in Computer Science, Engineering or a related field',
            },
          ],
        },
      ],
    },
    {
      position: { label: 'Vue Js Developer', id: 'react' },
      experience: 'Exp. 1.6 Years minimum',
      requireLang: ['React JS', 'Bootstrap', 'CSS', 'Javascript', 'Web Pack'],
      role: [
        {
          label: 'Role and Responsibilities :',
          objectives: [
            {
              responsiblity:
                'Developing new user-facing features using React.js',
            },
            {
              responsiblity:
                'Building reusable components and front-end libraries for future use',
            },
            {
              responsiblity:
                'Translating designs and wireframes into high-quality code',
            },
            {
              responsiblity:
                'Optimizing components for maximum performance across a vast array of web-capable devices and browsers Optimizing components for maximum performance across a vast array of web-capable devices and browsers',
            },
            {
              responsiblity:
                'Coordinating with various teams working on distinct layers',
            },
          ],
        },
        {
          label: 'Required Skills :',
          objectives: [
            {
              responsiblity:
                'Thorough understanding of React.js and its core principles',
            },
            { responsiblity: 'Knowledge of React Routing' },
            {
              responsiblity:
                'Knowledge of state management techniques like Redux/Flux, Context, etc',
            },
            {
              responsiblity:
                'Familiarity with modern front-end build pipelines and tools',
            },
          ],
        },
        {
          label: 'Nice to have :',
          objectives: [
            { responsiblity: 'Experience with Git and Bitbucket' },
            { responsiblity: 'Knowledge of Isomorphic React' },
            { responsiblity: 'Experience with node and MongoDB' },
          ],
        },
        {
          label: 'Qualification :',
          objectives: [
            {
              responsiblity:
                'B.E/B.Tech in Computer Science, Engineering or a related field',
            },
          ],
        },
      ],
    },
  ];
  filterCareer: any;
  searchedCareer!: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedCareer = this.careers[0];
    this.filterCareer = this.careers;
  }

  onSelect(data: Career) {
    this.selectedCareer = data;
  }

  onSearch(event) {
    const inputData = event?.target?.value;
    this.filterCareer = this.careers.filter((jobs) => {
      return jobs?.position.label.toLowerCase().includes(inputData);
    });
  }

  showAll() {
    this.searchedCareer = '';
    this.filterCareer = this.careers;
  }

  applyForjob() {
    const id = this.selectedCareer?.position?.id;
    this.router.navigate(['/career/' + id]);
  }
}
