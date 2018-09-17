# Google Sheets Demo

This is a demonstration of how to build a web app to access private unpublished data in Google Docs spreadsheets where the user of the web app is authorised to view the private data (e.g. it is their own data).

It uses OAuth 2.0 and a Google project key but it does not use or need the secret key or an API key. Furthermore, the app can run wholly on the client side - it has no need for node, access to the local file system or any other backend. It can be run on Stackblitz, Github Pages or, in theory, any static web server.

It uses Typescript and Angular. 

It is, at least as far as I understand it, very secure. Only a user who is logged in to their Google/Gmail account on their browser and has (as a one-off step) authorised the app to access their data, can view the contents of their spreadsheets. No one else, even if they know the project key, can access their spreadsheet, and if the user logs out of their Google account on their browser, no one else who then uses their browser can access their spreadsheets. The original author of the web app cannot access the private data of the users of their app, even though they know the secret key and even though the user has authorised the app to access their private data, because the original author cannot log in as the user (they don't know the user's Google password) and so they will never have the correct authorisation.

I hope that this will be useful to others. I found it remarkably difficult to work out how to do this, despite searching extensively on the web for an example. Now that I know how to do it, it is actually very easy. But even the Google documentation online doesn't seem to get it right (all the browser examples show the need to put in an API key even though it isn't needed and other parts of the documentation say that you should never put the API key in client side code and also say that it isn't needed). Also, the Google documentation shows OAuth access tokens being passed about by the code whereas this doesn't actually seem to be necessary.

## Setting up a new project

You probably won't need this part because it's a bit basic but I thought I'd include it as I would have found it helpful when I started out.

I will cover using Github Pages and Stackblitz. Both are free. You can choose either. In either case you will need to sign up with Github, which is free to do.   
If you choose the Github Pages option, you'll also need a local installation of various applications, including Node, Typescript, Angular Cli, Git and VS Code, all of which are free. These local installations are just for writing the code - once the app is written and uploaded they are no longer needed.

### Option 1 - Setting up a new Github Pages project.

As noted above, you need to first install the following software, all of which is free, on your computer, if it is not already installed. Please follow the guidance they each provide on how to do the installations:

[Node](https://nodejs.org)  
[Typescript](https://www.typescriptlang.org)  
[Angular Cli](https://angular.io)  
[Git](https://git-scm.com)  
[Visual Studio Code](https://code.visualstudio.com)  
[angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages)  
(Actually, contrary to the official guide, I installed angular-cli-ghpages using the command `npm install -g angular-cli-ghpages`. 
I found [this guide](https://alligator.io/angular/deploying-angular-app-github-pages/) useful.)

Optionally:  
[npm-check-updates](https://github.com/tjunnone/npm-check-updates)


The following is based on the Github guidance [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/). If this link is no longer valid, try googling 'add existing project to github'.
And also Angular guidance [here](https://angular.io/guide/quickstart). 

On the Github website, having logged in, go to Your Repositories.
![From top right profile drop-down menu](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/02_your_repositories.png "Your Repositories")

Then choose New:
![New](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/03_new_repository.png "New repository")

Then choose a name, don't initialize with a readme or add a .gitignore or a license. Then click 'Create Repository'.

Then it will give you a path to the repository which will end in .git. In the case of my repository for this demo, it is https://github.com/davidgma/google-sheets-demo.git. You will need this path in a minute so it's best to just leave this page there as it is.   
But if for any reason you lose the path, you can also get it from the main screen of the repository by clicking on 'Clone or download' and clicking on the copy-to-clipboard icon.
![Get the repository path](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/04_repository_path.png "Get the repository path")

Now go into a command prompt on your local machine. I use Linux so there will be some differences if you are using Windows, such as the directory separator character.  
Navigate to a directory that is just above where you want the new code to be:  
`cd ~/local/dev`

If you want to start with a clone of my demo, then instead issue the commands:
```
git clone https://github.com/davidgma/google-sheets-demo.git
cd google-sheets-demo
npm install
```

Then skip the next 2 steps and continue from the step of checking that it works (`ng serve --open`);

Issue the Angular Cli command to create a new project. It will automatically create a subdirectory named after the project and write all the files there. You can replace 'google-sheets-demo' by whatever you want to call your project.    
`ng new google-sheets-demo`

Go into the new subdirectory:  
`cd google-sheets-demo`

You don't need to issue a `git init` command because the Angular Cli does it for you.

You can now check that it works:  
`ng serve --open`  
It should open up a new browser tab with the default Angular web app.

Optionally you can update to the latest versions of all the software and dependencies, remove and recreate the package-lock.json file and then check it still works. The purpose of this is that, hopefully, it gets rid of all the vulnerability warnings from both npm and Github:

```
ncu
ncu -u
npm update
ncu
rm package-lock.json
npm install
ng serve --open
```

Next, update the local git repository. (Git works by keeping a local repository on your computer and then a remote one in the cloud, such as on Github. You have to update the local repository first before pushing it all to the Github repository) (The `git status` commands are optional but handy to see that it has worked):

```
git status
git add *
git commit -a -m "Initial sync."
git status
```

Then link the local git repository to the Github repository so that git knows where to write the remote one to. The path to the repository will be different for you - use the path you got earlier that ends in .git.:
```
git remote add origin https://github.com/your-github-username/google-sheets-demo.git
```

Then push all the default files that the Angular Cli has just created onto the remote Github repository. I'm not sure whether both the following commands are actually needed. Maybe only the second but it does no harm to issue them both. 

```
git push origin master
git push --set-upstream origin master
``` 

At this point, you should be able to see the files there in your Github repository.

Next you need to change a setting that the Angular Cli made by default in a file it created automatically. It is in the file angular.json which is in the top level subdirectory (named after your project). It is the option outputPath and by default it is set to dist/your-project-name but it needs to just be dist. You can amend it in a text editor or VS Code.  
![Set outputPath to dist](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/05_outputpath.png "Set the outputPath to dist")

Next, build the default Angular app and set it up as a Github Pages app using the angular-cli-ghpages program that you installed earlier. You will need to use your Github user name and whatever you called your project if you didn't call it google-sheets-demo in the https address below. Make sure you have the forward slash at the end, it's needed.

```
ng build --base-href "https://your-github-username.github.io/google-sheets-demo/"
git add *
git commit -a -m "Upload changes."
git push
ngh
```

Just as a check, you should be able to see in the settings for your project in Github that Github Pages is set up and pointing to the gh-pages branch. To go into the settings, click on the cog towards the top:

![Settings in Github](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/06_settings.png "Go into the settings")

Then, under settings, the Github Pages source should be set to gh-pages branch. If it isn't, set it yourself.  
![Source setting in Github](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/07_ghpages.png "Set the Github Pages source to gh-pages branch")


You should now be able to view the default app created by the Angular Cli in Github Pages. It will tell you the address to use under the Github Pages setting in the settings page and it will probably be in the following format:  
https://your-github-username.github.io/your-project-name/

![The default app in Github Pages](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/08_default_app.png "The default app served by Github pages")

Going forward, you will build your app locally using VS Code. As with normal Angular Cli usage, you will probably want to test your code as you go along using `ng serve --open`. This still works the same as ever. When you want to save the changes to Github and have Github Pages serve the latest version of your app, issue the following commands (replacing your-github-username and your-project-name appropriately). I use a script with the commands to save me typing them out each time. The `-m "Upload changes."` is the git commit message and you can change it each time to something more helpful if you wish:  

```
ng build --base-href "https:/your-github-username.github.io/your-project-name/"
git add *
git commit -a -m "Upload changes."
git push
ngh
```

If you get tired of putting in your Github username and password each time, then you can reduce it to only once in 15 minutes with the command:  
`git config --global credential.helper cache`  
or you could reduce it to once every 24 hours with the command:  
`git config --global credential.helper 'cache --timeout=86400'`

If you want to work on the project on another computer, use git clone with the path to the .git project file that you used earlier. Git will create a subdirectory under the directory from which you issue the command. Then go into the subdirectory and install the dependencies: 

```
git clone https://github.com/your-github-username/your-project-name.git
cd your-project-name
npm install
```

Then you use the same commands as before to push any changes you make back to the Github repository and re-publish it on Github Pages.  
Then, back on the original computer, if you want to pull in all the latest changes that you made on the other computer, use git pull:  
```
git pull
```


### Option 2 - Setting up a new Stackblitz project.

In a browser, go to stackblitz.com and sign up and sign in with your Github id if you haven't already. Then, from the stackblitz home page, under 'START A NEW PROJECT' choose Angular Typescript. Then, optionally, change the name of the new project to something you want by clicking on the edit icon at the top left. I don't think you'll be able to call it google-sheets-demo because I've already taken that name, sorry.

![Create a new Stackblitz project](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/09_stackblitz.gif "Create a new Stackblitz project")

If you want to start off with a copy of my Stackblitz project, then go to https://stackblitz.com/edit/google-sheets-demo and click on fork.

If you want to start off with a copy of my Github project, then go to https://stackblitz.com/github/davidgma/google-sheets-demo and click on fork.

That's all there is to it on Stackblitz - it's really impressive I think. It's a lot quicker and easier than on Github Pages, but the IDE, although based on VS Code, is not nearly as fully-featured as VS Code proper. Also, at the time of writing this there is no way of storing a copy of a Stackblitz project onto Github although they say that they are working on this. Also, again at the time of writing this, the export function of Stackblitz doesn't work properly - the files are jumbled up and won't run. Also, the time to load the actual app from Stackblitz is a lot slower than loading a Github Pages app because in the case of Github Pages, the static files have already been built and just need to be served, whereas with Stackblitz it compiles it all on the fly and you get the 'Starting dev server' and 'Instantiating bundle' messages while all this happens.

## Accessing the Google Sheets Data

The first hurdle to overcome is to work out exactly what Google authentication technology (or 'Google Identity Platform' as they put it) you should be looking at. There are a number of different technologies available for different use cases. I spent a lot of time chasing red herrings before I worked out what was relevant. The site with the best explanation is currently [here](https://developers.google.com/identity/choose-auth).

The use case we want is to allow a user to access their own data using their own Google credentials and not letting anyone else access that user's data, not even the developer of the app. The one we want is called 'Google Sign-In'. Under the Google Sign-In umbrella there are a few different platforms and the one we want is 'Web'.  
There is a [link](https://developers.google.com/identity/sign-in/web/) to the documentation for this specific technology. 

The documentation contains, amongst other things, the following:  
`<script src="https://apis.google.com/js/platform.js" async defer></script>`


This is a script to put in the head section of the web page.

The second hurdle to overcome is to get this script to actually load with Angular. You know whether it has loaded or not because if it does, a little Google button appears to let you sign in to the app and if it doesn't, the button doesn't appear at all. I tried a lot of things, mainly in Stackblitz, to get it to load but without success. I put the script tag in the head section of the index.html file per the Google example but it didn't load. I tried putting it in the external dependencies; it still didn't load. I tried putting it it the angular.json file. Nope. I tried taking out the `async defer` but the whole thing just hung. I think I may have tried some other things but I can't remember them all. In the end, I found a way of loading it that works perfectly and even gives you a hook into the event that is fired when it has loaded. I'm grateful to someone named [Ruben](https://github.com/rubenCodeforges) for the guidance on how to do it.

To make it more re-usable, I have a service that loads an API asynchronously and returns a Promise. It is in the service js-loader.service.ts:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsLoaderService {

  constructor() { }

  loadjs(url: string): Promise<void> {
    let p = new Promise<void>((resolve) => {
      let node = document.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0]
        .appendChild(node);
      node.onload = () => {
        console.log(`The javascript file ${url} has been loaded.`);
        resolve();
      }
    });

    return p;
  }
}
```
In line with the Google documentation, you also need 2 meta tags in the head section of the index.html file. You don't need to put the script tag in there because it doesn't work and it's dealt with later using the service above. And you don't need the div tag yet - that goes in a component.

```html
  <meta name="google-signin-scope" 
  content="profile email https://www.googleapis.com/auth/spreadsheets">
  <meta name="google-signin-client_id" content=
  "555978706374-qiqi420bj425if9iostbf483l4qj75he.apps.googleusercontent.com">
```
The Google documentation has just the scopes profile and email, but as we also want authorisation to view a user's spreadsheets, we also need to put in the spreadsheet scope as shown above. If you are wondering what other scopes you could put it, they are listed [here](https://developers.google.com/identity/protocols/googlescopes).

The client id I have above (the string starting 555978) is my own one. You can use it for trying out my demo and also when you are developing locally and serving to http://localhost:4200 but as I have restricted it to certain domains, you will need to get your own one if you want to develop your own app. Getting a client id is free to do and easyish and is documented to some extent on the [Google Sign-In for Websites](https://developers.google.com/identity/sign-in/web/sign-in) pages. But I'll go over it in more detail here because it doesn't cover the sheets API part and isn't that clear anyway. These are the steps to take:

First, go to the [Google developer console](https://console.cloud.google.com).

If you have no projects currently with Google then I'm not sure what the page will look like - maybe it will give you a button to create a new project. But if you have, then to create a new project you need to click on the drop-down menu just to the right of where it says 'Google Cloud Platform' at the top.  

![The developer console - drop down menu](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/10_api_console.png "The developer console - drop down menu")

A dialog box will pop up with a 'New Project' button at the top right. Click on this.  

![The developer console - drop down menu](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/11_new_project.png "The developer console - drop down menu")

Put in a project name e.g. Google Sheets Demo. Then click on Edit and change the project id to something more helpful than the default it gives you. It won't let you put 'google' in the name - if you try it will say that the project id is already taken. There are some other restrictions so if it says that the project id is already taken then try removing some terms that may be restricted. Then click on Create.  

![Create new project](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/12_create_project.png "Create new project")  

The developer console is a bit ropy and you may just be sent back to the initial screen and if you click the drop-down menu again it may look as though the project has not been created. After clicking on the drop down menu, when you get the pop-up dialog, try clicking on the little icon of a cog on a folder and see if the project is listed there. If it is, then select it, then click on home. 

![Cog icon](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/13_little_cog.png "Cog icon") 


The Google Developers site seems to change every time I use it and behave in unpredicable ways so I wouldn't be surprised if your experience is completely different to mine. I then clicked on 'APIs & Services' on the menu listing. 

![APIs and services menu](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/14_apis_and_services_menu.png "APIs and services menu") 

If your page looks different, try to find the APIs & Services page as best you can. You need to aim to get to a page where your project is shown at the top to the right of 'Google Cloud Platform' and you have the options 'Dashboard', 'Library' and 'Credentials' to the left:

![APIs and services page](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/15_apis_page.png "APIs and services page") 

While creating a new project for this demo, it automatically enabled a lot of APIs - 12 in all - that appeared further down the dashboard. It's never done this before (or perhaps I just never noticed before) and I don't need the APIs. I always get frustrated by the unpredicability of the Google Cloud Platform interface - it seems to behave differently each time I use it. AI tried to disable all the APIs that it had automatically added in but it wouldn't let me so I just left them as-is.

Anyway, next, go to Credentials, click on Create Credentials and then choose OAuth client id.

![Create credentials](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/16_create_credentials.png "Create credentials") 


It then says that you need to create a product name on the consent screen. This is what appears when users are asked whether they want to give the app permission to view their data. Click on 'Configure consent screen' and call it something. I didn't fill in any other fields but you can fill out whatever you want. Then click on Save.  

It will take you back to the 'Create OAuth client ID' page. Choose Web Application, give it a name and, for safety, put in some restrictions for the origin and redirect. These will typically be the address of your app and, at least for testing, the Angular localhost address and port. I put in paths for the Stackblitz app (the address of the opened app not the IDE for the app) and for the Github Pages app address. Then click create.  

![OAuth dialog](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/17_oauth_form.png "OAuth dialog")

Hopefully, it will then tell you your client id although there's really no telling what it might do. This is what you need to put in the index.html file for the meta google-signin-client_id. You may as well put it in now. You don't need it again. It will also tell you your secret key but you don't need this. 

There's one thing left to do in the glorious Google Cloud Platform console, and that is to add in the sheets API. Go to Library (from the left panel) and where it says 'Search for an API' and type in 'sheets'. It will hopefully give you the Google Sheets API in the results. Click on this and then click 'Enable'.  

![Enable sheets API](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/18_sheets_api_add.gif "Enable sheets API")

It then says "To use this API, you may need credentials. Click 'Create credentials' to get started." But in fact you don't need any further credentials. The OAuth that you've already created is enough and if you do get more credentials, all it gives you is an API key which you don't need and aren't supposed to put in a web app for security reasons anyway. If people can see your API key then they can steal your usage allowance whereas if they can see your project client id it doesn't really matter so long as you have some restrictions on which web addresses can use it.  
That is it for the Google Cloud Platform console. If you go back to the APIs & Services dashboard you should be able to see the Google Sheets API listed under 'API'.

![Sheets API is listed](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/19_api_listed.png "Sheets API is listed")


The next step, as documented in the [Google Sign-In for Websites](https://developers.google.com/identity/sign-in/web/sign-in) page, is to add the sign-in button to the app. This is best put in the template of a component. In the case of my demo, I've put it in the file app.component.html. Further down the Google documentation it also has some code for a sign-out button, so you might as well add that in now too.

```html
<div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark">
</div>
<br>
<button matTooltip="Sign out" (click)="signOut()">Sign out
</button>
<br>
<p>
    The Google Sign-in button should appear above.
</p>

```

The Google sign-in button still won't appear because we haven't called the code to load the platform.js file. I've put this in the app.component.ts file in the ngOnInit method.  
Also in that file I've added in the OnInit references and references to the js-loader service.  
Also I've put in a signOut method that's referenced in the template.  
Also I've put in a declare global statement to avoid compile errors with the gapi type. I did try importing a proper .d.ts definition file but this didn't go well. I tried all sorts of approaches and none worked either because the file I got was out-of-date or had node dependencies which weren't available in a browser-only context. There are so few gapi commands needed that I ended up just ignoring types for it and using the debug facilities in VS Code when I wanted to see what methods and properties were actually available in practice. If you wanted to do it properly with a d.ts file you certainly could try.  

```typescript
import { Component, OnInit } from '@angular/core';
import { JsLoaderService } from './js-loader.service';

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

  constructor(private loader: JsLoaderService) { }

  ngOnInit() {

    console.log("Loading the javascript API file.");
    this.loader.loadjs(this.javascriptFile).then(() => {
      console.log("The javascript file has been loaded.");
    });
  }
}
```

At this point you should see the Google Sign-In button and it should be able to sign you in. You'll get some messages about the app not being safe - but to use the demo you need to go ahead and say that you trust it. You can review my code to see whether you can see anything suspicious in it or build your own code that you trust based on my demo.  
Notice that we haven't hooked up to the 'onSignIn' function that is referenced in the 'g-signin2' div in the template. It's easy to do this and it gives you access to various bits of information such as the user name, email address and id_token. I'll go over how to do this a bit later but it isn't actually needed, strangely enough, to be able to access the spreadsheets once the user has granted permissions via the Google Sign-In button. All the Google documentation I could find on how to do what I'm demonstrating here has code to pass in the API key and an authorisation token into the API functions, but it actually works perfectly well without doing either, and other parts of the documentation say you aren't supposed to put the API key in client code. I can only assume that the OAuth code that is called when you sign in and authorise the app writes the authorisation tokens to a place where the Sheets API can find it.

The last step is to retrieve something from a Google Docs spreadsheet. If you use the debugger to see what variables are available at this point, you will find that there is a global gapi object (created by loading the platform.js file) that has a load method amongst other things but no client object under the gapi object. So you need to bring it it using the command found in the Google API documentation `gapi.load('client',`:

```typescript
gapi.load("client", () => {
  // code called after loading the client
}
```

This gives you a gapi.client object in the global javascript namespace which contains, amongst other things, its own load method, but no sheets object below the gapi.client object. So you need to bring this in. Most of the Google documentation that I found at the time of writing this has the code `gapi.client.load('sheets', 'v4', () => {` but, rather irritatingly, the actual documentation for this method [here](https://developers.google.com/api-client-library/javascript/reference/referencedocs) says that this calling method is deprecated. Hopefully in time Google will update their examples to not use methods that they say are deprecated. The way they want you to do it now is using 'gapi.client.load(urlOrObject)'. The `urlOrObject` is the 'Discovery Document URL' which, unhelpfully, they don't make it easy to find. Fortunately it's in the [Google Sheets documentation](https://developers.google.com/sheets/api/reference/rest/) and is 'https://sheets.googleapis.com/$discovery/rest?version=v4'. So the code that works is:

```typescript
gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4')
      .then(() => {
        // code for when the sheets library is loaded.
}
```

Once the sheets library is loaded, you will finally have the global javascript object gapi.client.sheets.spreadsheets and from then on it's pretty plain sailing because the objects available under this tie up with the documentation from the [Google Sheets API reference](https://developers.google.com/sheets/api/reference/rest/). For example, the following gets some data from a spreadsheet:

```typescript
gapi.client.sheets.spreadsheets.values.get({
  spreadsheetId: this.model.sheetId,
  range: this.model.range
  }).then((response) => {
    // gives you 'response': a json object with the spreadsheet data you've requested.
  }
```

Note again that you didn't need to do anything whatsoever with any session id, auth key, secret key or api key, despite what you might think from reading the Google documentation. It seems that the gapi OAuth and api code work together to handle that all for you seemlessly. So it's actually remarkably easy to use once you know how and I think Google have done an amazing job in making it so easy. I just wish they would change their documentation to show this. Hopefully they will in due course. In the mean time, I hope that this proves helpful for you.

todo: documentation of getting user name etc - hooking in to the info.
  Break code up into sections using routing. 1 section for simple demo, 1 for showing hooks to user name etc and 1 to get spreadsheet names and anything else that is a bit more useful.

