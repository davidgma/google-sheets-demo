# GoogleSheetsDemo

This is a demonstration of how build a web app to access private unpublished data in Google Docs spreadsheets where the user of the web app is authorised to view the private data (e.g. it is their own data).

It uses OAuth 2.0 and a Google project key but it does not use or need the secret key or an API key. Furthermore, the app can run wholly on the client side - it has no need for node, access to the local file system or any other backend. It can be run on Stackblitz, Github Pages or, in theory, any static web server.

It uses Typescript and Angular. 

It is, at least as far as I understand it, very secure. Only a user who is logged in to their Google/Gmail account on their browser and has (as a one-off step) authorised the app to access their data, can view the contents of their spreadsheets. No one else, even if they know the project key, can access their spreadsheet, and if the user logs out of their Google account on their browser, no one else who then uses their browser can access their spreadsheets. The original author of the web app cannot access the private data of the users of their app, even though they know the secret key and even though the user has authorised the app to access their private data, because the original author cannot log in as the user (they don't know the user's Google password) and so they will never have the correct authorisation.

I hope that this will be useful to others. I found it remarkably difficult to work out how to do this, despite searching extensively on the web for an example. Now that I know how to do it, it is actually very easy. But even the Google documentation online doesn't seem to get it right (all the browser examples show the need to put in an API key even though it isn't needed and other parts of the documentation say that you should never share the API key and also say that it isn't needed). Also, the Google documentation has shows access tokens being passed about by the code whereas this doesn't actually seem to be necessary.

## A step-by-step guide

### Setting up a new project