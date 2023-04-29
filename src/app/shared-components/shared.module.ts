import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { JtTechnologyComponent } from './jt-technology/jt-technology.component';
import { ClientReviewComponent } from './client-review/client-review.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


const materialModule = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  DragDropModule,
  NgbCarouselModule,
];

@NgModule({
  declarations: [JtTechnologyComponent, ClientReviewComponent],
  imports: [CommonModule, materialModule, ReactiveFormsModule, FormsModule],
  exports: [
    materialModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    JtTechnologyComponent,
    ClientReviewComponent
  ],
})
export class SharedModule {}
