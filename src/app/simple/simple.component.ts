import { Component, OnInit } from '@angular/core';
import { SimpleRequest } from './simple-request';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  
  public model = new SimpleRequest();
  public output: string;
 
  constructor(private cd: ChangeDetectorRef) {
    this.output = "Enter a spreadsheet id and range then press submit";
  }

  ngOnInit() { }

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
            this.cd.detectChanges();
          }, (error) => {
            this.output = "Error: \n";
            this.output += error.result.error.message + "\n";
            this.cd.detectChanges();
          });
        }, (error) => {
          console.log("Error loading sheets API: " + error);
        });
    });
  } // End of onSubmit method

} // End of class SimpleComponent