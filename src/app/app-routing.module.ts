import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from '@app/component/contact-us/contact-us.component';
import { ServicesComponent } from '@app/component/services/services.component';
import { FullLayoutComponent } from '@app/layout/full-layout/full-layout.component';
const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('@app/component/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'career',
        loadChildren: () =>
          import('@app/component/career/career.module').then(
            (m) => m.CareerModule
          ),
      },
      {
        path: 'hire-us',
        loadChildren: () =>
          import('@app/component/hire-developer/hire-developer.module').then(
            (m) => m.HireDeveloperModule
          ),
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('@app/component/portfolio/portfolio.module').then(
            (m) => m.PortfolioComponentModule
          ),
      },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'services', component: ServicesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
