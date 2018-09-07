# Google Sheets Demo

This is a demonstration of how to build a web app to access private unpublished data in Google Docs spreadsheets where the user of the web app is authorised to view the private data (e.g. it is their own data).

It uses OAuth 2.0 and a Google project key but it does not use or need the secret key or an API key. Furthermore, the app can run wholly on the client side - it has no need for node, access to the local file system or any other backend. It can be run on Stackblitz, Github Pages or, in theory, any static web server.

It uses Typescript and Angular. 

It is, at least as far as I understand it, very secure. Only a user who is logged in to their Google/Gmail account on their browser and has (as a one-off step) authorised the app to access their data, can view the contents of their spreadsheets. No one else, even if they know the project key, can access their spreadsheet, and if the user logs out of their Google account on their browser, no one else who then uses their browser can access their spreadsheets. The original author of the web app cannot access the private data of the users of their app, even though they know the secret key and even though the user has authorised the app to access their private data, because the original author cannot log in as the user (they don't know the user's Google password) and so they will never have the correct authorisation.

I hope that this will be useful to others. I found it remarkably difficult to work out how to do this, despite searching extensively on the web for an example. Now that I know how to do it, it is actually very easy. But even the Google documentation online doesn't seem to get it right (all the browser examples show the need to put in an API key even though it isn't needed and other parts of the documentation say that you should never put the API key in client side code and also say that it isn't needed). Also, the Google documentation shows OAuth access tokens being passed about by the code whereas this doesn't actually seem to be necessary.

## A step-by-step guide

### Setting up a new project

You probably won't need this part because it's a bit basic but I thought I'd include it as I would have found it helpful when I started out.

I will cover using Github Pages and Stackblitz. Both are free. You can choose either. In either case you will need to sign up with Github, which is free to do.   
If you choose the Github Pages option, you'll also need a local installation of various applications, including Node, Typescript, Angular Cli, Git and VS Code, all of which are free. These local installations are just for writing the code - once the app is written and uploaded they are no longer needed.

#### Option 1 - Setting up a new Github Pages project.

As noted above, you need to first install the following software, all of which is free, on your computer, if it is not already installed. Please follow the guidance they each provide on how to do the installations:

[Node](https://nodejs.org)  
[Typescript](https://www.typescriptlang.org)  
[Angular Cli](https://angular.io)  
[Git](https://git-scm.com)  
[Visual Studio Code](https://code.visualstudio.com)  
[angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages)  

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

Issue the Angular Cli command to create a new project. It will automatically create a subdirectory named after the project and write all the files there. You can replace 'google-sheets-demo' by whatever you want to call your project.    
`ng new google-sheets-demo`

Go into the new subdirectory:  
`cd google-sheets-demo`

You don't need to issue a `git init` command because the Angular Cli does it for you.

You can now check that it works:  
`ng serve --open`  
It should open up a new browser tab with the default Angular web app.

Optionally you can update to the latest versions of all the software and dependencies and then check it still works:

```
ncu
ncu -u
npm update
ncu
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

#### Option 2 - Setting up a new Stackblitz project.
