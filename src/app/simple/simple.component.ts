import { Component, OnInit } from '@angular/core';
import { JsLoaderService } from '../js-loader.service';
import { Sheet } from '../sheet';
import { ChangeDetectorRef } from '@angular/core';

declare global {
  var gapi;
  interface Window { onSignIn: (googleuser: any) => void; }
}

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  private javascriptFile = "https://apis.google.com/js/platform.js";
  public model = new Sheet();
  public output: string;
  public jsonData: string;
  public isSignedIn: boolean = false;
  public googleDisplay = "block";

  constructor(private loader: JsLoaderService,
    private cd: ChangeDetectorRef) {
    this.output = "Enter a spreadsheet id and range then press submit";
    window.onSignIn = (googleUser) => this.onSignIn(googleUser);
  }

  ngOnInit() {

    console.log("Loading the javascript API file.");
    this.loader.loadjs(this.javascriptFile).then(() => {
      console.log("The javascript file has been loaded.");
    });
  }

  public signOut() {
    console.log('Signing out.');
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.isSignedIn = false;
      this.googleDisplay = "block";
      this.cd.detectChanges();
    });
  }

  onSubmit() {
    this.output = "Processing submission...";
    console.log(JSON.stringify(this.model));
    gapi.load("client", () => {
      console.log("client loaded");
      gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4')
        .then(() => {
          console.log("sheets v4 loaded");
          gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.model.sheetId,
            range: this.model.range
          }).then((response) => {
            console.log("Range retrieved: "
              + response.result.values[0]);
            this.output = "Data found: \n";
            for (let v of response.result.values) {
              this.output += v + "\n";
            }
            //this.output = response.result.values[0];
            this.jsonData = JSON.stringify(response);
            this.cd.detectChanges();
          }, (error) => {
            this.output = "Error: \n";
            this.output += error.result.error.message + "\n";
            this.jsonData += JSON.stringify(error);
            this.cd.detectChanges();
          });
        }, (error) => {
          console.log("Error loading sheets API: " + error);
        });
    });
  }

  public onSignIn(googleUser) {
    /*
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); 
    // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    */
    console.log("signed in");
    this.isSignedIn = true;
    this.googleDisplay = "none";
    this.cd.detectChanges();
  }

}