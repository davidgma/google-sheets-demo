import { Component, OnInit } from '@angular/core';
import { JsLoaderService } from './js-loader.service';
import { Sheet }  from './sheet';
import { ChangeDetectorRef } from '@angular/core';

declare global {
  var gapi;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private javascriptFile = "https://apis.google.com/js/platform.js";
  public model = new Sheet();
  public output: string;
  public jsonData: string;

  constructor(private loader: JsLoaderService, 
    private cd: ChangeDetectorRef) {
    this.output = "Enter a spreadsheet id and range then press submit";
   }

  ngOnInit() {

    console.log("Loading the javascript API file.");
    this.loader.loadjs(this.javascriptFile).then(() => {
      console.log("The javascript file has been loaded.");
    });
  }

  public signOut() {

    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
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
}
