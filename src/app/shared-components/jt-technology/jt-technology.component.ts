import { Component, HostListener, OnInit } from '@angular/core';
import { Technology } from './technology';
import data from '../../../assets/data/jt-website.json';

@Component({
  selector: 'app-jt-technology',
  templateUrl: './jt-technology.component.html',
  styleUrls: ['./jt-technology.component.scss'],
})
export class JtTechnologyComponent implements OnInit {
  data: any = { ...data };
  technology!: Technology[];
  selectedTechnology!: Technology;
  mouseselectoptoin: any;
  processDevelopment: any;

  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    this.callbackFunc();
  }

  ngOnInit() {
    this.callbackFunc();

    this.technology = this.data?.technologyStack;
    this.selectedTechnology = this.technology[0];
    this.processDevelopment = this.data.developmentProcess;
  }

  onChange(selectedTechnology) {
    this.selectedTechnology = selectedTechnology;
  }

  mouseselect(item) {
    if (this.mouseselectoptoin == item) {
      this.mouseselectoptoin = null;
    } else {
      this.mouseselectoptoin = item;
    }
  }

  isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  callbackFunc() {
    var items = document.querySelectorAll('.timeline li');
    for (var i = 0; i < items.length; i++) {
      if (this.isElementInViewport(items[i])) {
        if (!items[i].classList.contains('in-view')) {
          items[i].classList.add('in-view');
        }
      } else if (items[i].classList.contains('in-view')) {
        items[i].classList.remove('in-view');
      }
    }
  }
}
