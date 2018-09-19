import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HooksComponent } from './hooks.component';

const routes: Routes = [
  { path: 'hooks', component: HooksComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class HooksRoutingModule { }