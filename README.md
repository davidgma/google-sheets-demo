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

In a browser, go to stackblitz.com and sign up with your Github id if you haven't already. Then, from the stackblitz home page, under 'START A NEW PROJECT' choose Angular Typescript. Then, optionally, change the name of the new project to something you want by clicking on the edit icon at the top left. I don't think you'll be able to call it google-sheets-demo because I've already taken that name, sorry.

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


This is a script to put in the <head> section of the web page.

The second hurdle to overcome is to get this script to actually load with Angular. You know whether it has loaded or not because if it does, a little Google button appears to let you sign in to the app and if it doesn't, the button doesn't appear at all. I tried a lot of things, mainly in Stackblitz, to get it to load but without success. I put the script tag in the <head> section of the index.html file per the Google example but it didn't load. I tried putting it in the external dependencies; it still didn't load. I tried putting it it the angular.json file. Nope. I tried taking out the `async defer` but the whole thing just hung. I think I may have tried some other things but I can't remember them all. In the end, I found a way of loading it that works perfectly and even gives you a hook into the event that is fired when it has loaded. I'm grateful to someone named [Ruben](https://github.com/rubenCodeforges) for the guidance on how to do it.

As there is also another script for the APIs that needs to be loaded later, I have a service that loads an API asynchronously and returns a Promise. It is in the service js-loader.service.ts:

```
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



