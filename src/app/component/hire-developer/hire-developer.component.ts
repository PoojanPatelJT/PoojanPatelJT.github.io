import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from "../../../assets/data/jt-website.json"

@Component({
  selector: 'app-hire-developer',
  templateUrl: './hire-developer.component.html',
  styleUrls: ['./hire-developer.component.scss'],
})
export class HireDeveloperComponent implements OnInit {
  data:any = {...data};
  technologyInfo: any;
  
  constructor(private activateRoute:ActivatedRoute) {}

  ngOnInit() {
    this.technologyInfo = this.data?.hireUs.technology[2];
    this.activateRoute.queryParams.subscribe((selectedTechnology:any) => {
    this.technologyInfo = this.data.hireUs.technology.find((technology) => technology?.id === selectedTechnology?.tech)
    })
  }

}
