import { Component, OnInit } from '@angular/core';

import * as portfoliodata from  '@assets/data/jt-website.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfoliodata = {...portfoliodata}
  sliderdata: any;
  selectedTechnology:string = this.portfoliodata.portfolio[0].title 


  ngOnInit(): void {
     this.sliderdata = this.portfoliodata.portfolio;
  }

}
