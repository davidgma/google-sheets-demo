import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {PrivacyComponent } from './privacy.component';

const routes: Routes = [
  { path: 'privacy', component: PrivacyComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PrivacyRoutingModule { }