import { Component, OnInit, EventEmitter } from '@angular/core';
import { GoogleAuthService } from '../google-auth.service';

@Component({
    selector: 'app-hooks',
    templateUrl: './hooks.component.html',
    styleUrls: ['./hooks.component.css']
})
export class HooksComponent {
    public output: Array<string> = new Array<string>();

    constructor(public gdata: GoogleAuthService) {
        this.output.push("Sign in to see what information it provides.");
        // Check whether it's already signed in, otherwise wait for it
        // to be.
        if (this.gdata.isSignedIn) {
            this.showData();
        }
        // Listen for the signin
        this.gdata.signIn.subscribe(() => {
            this.showData();
        });
        // Listen for signout
        this.gdata.signedOut.subscribe(() => {
            this.clearData();
        });

    }

    ngOnInit() { }

    showData() {
        // Useful data for your client-side scripts:
        let profile = this.gdata.googleUser.getBasicProfile();
        this.output.length = 0;
        this.output.push("Here are some of the data available from OAuth:");
        this.output.push("(But note that you don't need to code with any of it to access spreadsheets - Google handles it all for you.)");
        this.output.push("ID: " + profile.getId());
        // Don't send this directly to your server!
        this.output.push('Full Name: ' + profile.getName());
        this.output.push('Given Name: ' + profile.getGivenName());
        this.output.push('Family Name: ' + profile.getFamilyName());
        this.output.push("Image URL: " + profile.getImageUrl());
        this.output.push("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        let id_token = this.gdata.googleUser.getAuthResponse().id_token;
        this.output.push("ID Token: " + id_token);
    }

    clearData() {
        this.output.length = 0;
        this.output.push("Sign in to see what information it provides.");
    }

} // End of class HooksComponent