import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../google-auth.service';

@Component({
    selector: 'app-longer',
    templateUrl: './longer.component.html',
    styleUrls: ['./longer.component.css']
})
export class LongerComponent implements OnInit {

    public output: Array<string> = new Array<string>();

    constructor(private cd: ChangeDetectorRef, 
        public gauth: GoogleAuthService) {
        this.output.push("loading..");
    }

    ngOnInit() {
        this.output.push("Processing submission...");
        // Wait for the auth to be ready
        if (this.gauth.isSignedIn) {
            this.run();
        }
        this.gauth.signIn.subscribe(() => {
            this.run();
        })

    } // End of ngOnInit

    private async run() {
        await this.gauth.loadClient();
        console.log("client loaded");
        await this.gauth.loadSheetsAPI();
        console.log("sheets v4 loaded");
        await this.gauth.loadDriveAPI();
        console.log("drive v3 loaded");
        let request = gapi.client.drive.about.get();
        // Update the params
        //console.log("request: " + JSON.stringify(request));
        this.setKey(request, "params", {"fields": "user"});
        console.log("request: " + JSON.stringify(request));
        request.execute((response) => {
            console.log("response: " + JSON.stringify(response));
        },
        (error) => {
            console.log("response error: " + JSON.stringify(error));
        });
    }

    private setKey(o: Object, name: string, value: Object) {
        for (let key of Object.keys(o)) {
            if (key == name) {
                o[key] = value;
            }
            if (o[key] instanceof Object) {
                this.setKey(o[key], name, value);
            }
        }
    }

    
    
} // End of LongerComponent class