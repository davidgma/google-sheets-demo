# Google Sheets Demo

This is a demonstration of how to build a web app to access private unpublished data in Google Docs spreadsheets where the user of the web app is authorised to view the private data (e.g. it is their own data).

It uses OAuth 2.0 and a Google project key but it does not use or need the secret key or an API key. Furthermore, the app can run wholly on the client side - it has no need for node, access to the local file system or any other backend. It can be run on Stackblitz, Github Pages or, in theory, any static web server.

It uses Typescript and Angular. 

It is, at least as far as I understand it, very secure. Only a user who is logged in to their Google/Gmail account on their browser and has (as a one-off step) authorised the app to access their data, can view the contents of their spreadsheets. No one else, even if they know the project key, can access their spreadsheet, and if the user logs out of their Google account on their browser, no one else who then uses their browser can access their spreadsheets. The original author of the web app cannot access the private data of the users of their app, even though they know the secret key and even though the user has authorised the app to access their private data, because the original author cannot log in as the user (they don't know the user's Google password) and so they will never have the correct authorisation.

I hope that this will be useful to others. I found it remarkably difficult to work out how to do this, despite searching extensively on the web for an example. Now that I know how to do it, it is actually very easy. But even the Google documentation online doesn't seem to get it right (all the browser examples show the need to put in an API key even though it isn't needed and other parts of the documentation say that you should never put the API key in client side code and also say that it isn't needed). Also, the Google documentation shows OAuth access tokens being passed about by the code whereas this doesn't actually seem to be necessary.

## A step-by-step guide

### Setting up a new project

I will cover using Github Pages and Stackblitz. Both are free. You can choose either. In either case you will need to sign up with Github, which is free to do. 
If you choose the Github Pages option, you'll also need a local installation of Node, Typescript, Angular Cli, Git and VS Code, all of which are free. These local installations are just for writing the code - once the app is written and uploaded they are no longer needed.

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


This is based on the Github guidance [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/). If this link is no longer valid, try googling 'add existing project to github'.
And also Angular guidance [here](https://angular.io/guide/quickstart). 

On the Github website, having logged in, go to Your Repositories.
![From top right profile drop-down menu](https://github.com/davidgma/google-sheets-demo/raw/master/screenshots/02_your_repositories.png "Your Repositories")