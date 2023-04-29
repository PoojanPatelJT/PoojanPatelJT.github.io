import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientReviewComponent implements OnInit {
  reviewItem: any[] = [
    { clientName: 'Sean Miller' , review:'He has fair amount of knowledge in some of the Java frameworks. Used him for a quick fix. He is affordable and quick to respond. Decent resource if you are looking to hire someone affordable.' },
    { clientName: 'Jason' , review:'I have been working with Dipesh since many months. His skills, hard-work, patience, perseverance, tolerance to accommodate change requests make him a start studded performer in my team. Waiting to hire him back again on my next project.' },
    { clientName: 'Ron Warshawsky' , review:'Very professional and good developer' },
    { clientName: 'Vipul' , review:"Extremely happy to work with him. He is tech person so job don't have take time to complete. Highly Recommended and will definitely work with him in future." },
    { clientName: 'Justin' , review:'Very happy with Dipesh. Good work ethic and communicated well. He knows React well and I can recommend him to other companies' },
    { clientName: 'OXOS Medical, Inc team' , review:"Dipesh was a wonderful asset to our development team. He is a GWT expert and I would not hesitate to work with him in the future on any UI/UX front end development." },
  ];
  @ViewChild('sliderContainer') template!: ElementRef;

  constructor(
    private render: Renderer2,
    private scroller: ViewportScroller
    ) {}

  ngOnInit() {}

  moveNext() {
    Array.from(this.template.nativeElement.children).forEach(
      (item: any, index: number) => {
        let allclasses = item.className.split(' ');
        allclasses = allclasses.filter((items)=>items != 'ng-star-inserted');
        let currentclass = Number(allclasses[0]?.split('-')?.pop());
        let nextclass =
          currentclass > 0
            ? `n-${currentclass - 1}`
            : `n-${this.template.nativeElement.children.length - 1}`;
        this.render.removeClass(item, allclasses[0]);
        this.render.addClass(item, nextclass);
       }
    );
  }

  moveBack() {
    Array.from(this.template.nativeElement.children).forEach(
      (item: any, index: number) => {
        let allclasses = item.className.split(' ');
        allclasses = allclasses.filter((items)=>items != 'ng-star-inserted');
        let currentclass = Number(allclasses[0]?.split('-')?.pop());
        let nextclass =
          currentclass == this.template.nativeElement.children.length - 1
            ? `n-0`
            : `n-${currentclass + 1}`;
        this.render.removeClass(item, allclasses[0]);
        this.render.addClass(item, nextclass);
      }
    );
  }
}
