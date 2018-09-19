import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';
import { ChangeDetectorRef } from '@angular/core';

declare global {
  interface Window { onSignIn: (googleuser: any) => void; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isSignedIn: boolean = false;
  public googleDisplay = "block";

  constructor(public gdata: GoogleAuthService,
    private cd: ChangeDetectorRef) {
    window.onSignIn = (googleUser) => this.onSignIn(googleUser);
  }

  onSignIn(googleUser) {
    this.gdata.onSignIn(googleUser);
    this.isSignedIn = this.gdata.isSignedIn;
    this.googleDisplay = this.gdata.googleDisplay;
    this.cd.detectChanges();
  }

  public async signOut() {
    console.log("calling gdata signout...");
    await this.gdata.signOut();
    console.log("gdata signout finished");
    this.isSignedIn = this.gdata.isSignedIn;
    this.googleDisplay = this.gdata.googleDisplay;
    this.cd.detectChanges();
  }

  ngOnInit() { }
}
