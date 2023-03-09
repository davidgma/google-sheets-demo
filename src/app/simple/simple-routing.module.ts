import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class SimpleRoutingModule { }