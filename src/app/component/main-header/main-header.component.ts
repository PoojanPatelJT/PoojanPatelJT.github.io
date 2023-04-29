import {
  Component,
  OnInit,
  HostListener,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Icons } from '@app/shared-components/shared-interface/Icons';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  menuItems: Icons[] = [
    { label: 'Home', icon: 'pi pi-fw pi-plus', routerlink: 'home' },
    {
      label: 'Hire a Developer',
      icon: 'pi pi-fw pi-download',
      routerlink: 'hire-us',
      subItems: [
        {
          id: 'angular',
          label: 'Hire Angular Developer',
          routerlink: 'hire-us',
        },
        { id: 'react', label: 'Hire React Developer', routerlink: 'hire-us' },
        { id: 'java', label: 'Hire JAVA Developer ', routerlink: 'hire-us' },
      ],
    },
    {
      label: 'Portfolio',
      icon: 'pi pi-fw pi-refresh',
      routerlink: 'portfolio',
    },
    { label: 'Services', icon: 'pi pi-fw pi-refresh', routerlink: 'services' },
    { label: 'Contact', icon: 'pi pi-fw pi-refresh', routerlink: 'contact-us' },
    { label: 'Career', icon: 'pi pi-fw pi-refresh', routerlink: 'career' },
  ];

  @ViewChild('mainNavbar') navbar!: ElementRef;
  @ViewChild('navBarMobile') navBarMobile!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.heder-container') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      this.renderer.addClass(this.navbar.nativeElement, 'in');
    } else {
      element.classList.remove('in');
    }
  }

  showHeader() {
    if (this.navBarMobile.nativeElement.classList.contains('navbar-mobile')) {
      this.renderer.removeClass(
        this.navBarMobile.nativeElement,
        'navbar-mobile'
      );
    } else {
      this.renderer.addClass(this.navBarMobile.nativeElement, 'navbar-mobile');
    }
  }
}
