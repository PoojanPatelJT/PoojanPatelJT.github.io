import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared-components/shared.module';
import { ApplyNowComponent } from '../apply-now/apply-now.component';
import { CareerComponent } from './career.component';

const routes: Routes = [
  {
    path: '',
    component: CareerComponent,
  },
  {
    path: ':role',
    component: ApplyNowComponent,
  },
];

@NgModule({
  declarations: [ApplyNowComponent, CareerComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class CareerModule {}
