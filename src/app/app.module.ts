import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgTreeComponent } from './org-tree/org-tree.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OrgTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrganizationChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
