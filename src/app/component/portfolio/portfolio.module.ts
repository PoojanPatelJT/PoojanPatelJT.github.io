import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from '@app/component/portfolio/portfolio.component';
import { SharedModule } from '@app/shared-components/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
];


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PortfolioComponentModule { }
