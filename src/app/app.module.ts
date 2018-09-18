import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { JsLoaderService } from './js-loader.service';
import { SimpleComponent } from './simple/simple.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleRoutingModule } from './simple/simple-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SimpleRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SimpleComponent,
    PageNotFoundComponent
    ],
  bootstrap: [AppComponent],
  providers: [JsLoaderService]
})
export class AppModule { }
