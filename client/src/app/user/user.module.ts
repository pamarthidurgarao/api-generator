import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReportGeneratorViewComponent } from './report-generator-view/report-generator-view.component';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'user', component: UserComponent, children: [
          { path: 'home', component: HomeComponent },
          { path: 'ReportGeneratorView', component: ReportGeneratorViewComponent }
        ]
      }
    ])
  ],
  providers: [],
  declarations: [HomeComponent, ReportGeneratorViewComponent, UserComponent]
})
export class UserModule { }
