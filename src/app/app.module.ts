import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { GoogleAuthService } from './google-auth.service';
import { JsLoaderService } from './js-loader.service';
import { SimpleComponent } from './simple/simple.component';
import { HooksComponent } from './hooks/hooks.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleRoutingModule } from './simple/simple-routing.module';
import { HooksRoutingModule } from './hooks/hooks-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SimpleRoutingModule,
    HooksRoutingModule,
    AboutRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SimpleComponent,
    HooksComponent,
    AboutComponent,
    PageNotFoundComponent
    ],
  bootstrap: [AppComponent],
  providers: [
    JsLoaderService,
    GoogleAuthService]
})
export class AppModule { }
