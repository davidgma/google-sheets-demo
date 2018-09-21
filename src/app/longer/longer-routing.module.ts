import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LongerComponent } from './longer.component';

const routes: Routes = [
  { path: 'longer', component: LongerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class LongerRoutingModule { }