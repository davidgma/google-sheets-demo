import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AboutComponent } from './about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AboutRoutingModule { }