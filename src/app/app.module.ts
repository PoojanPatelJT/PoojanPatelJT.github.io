import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from '@app/component/main-header/main-header.component';
import { BlankComponent } from '@app/layout/blank/blank.component';
import { FullLayoutComponent } from '@app/layout/full-layout/full-layout.component';
import { SharedModule } from '@app/shared-components/shared.module';
import { FooterComponent } from '@app/component/footer/footer.component';
import { ContactUsComponent } from '@app/component/contact-us/contact-us.component';
import { ServicesComponent } from '@app/component/services/services.component';
import { HireDeveloperModule } from '@app/component/hire-developer/hire-developer.module';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    BlankComponent,
    MainHeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HireDeveloperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
