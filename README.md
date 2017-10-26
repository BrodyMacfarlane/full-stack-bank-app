# HOW TO RUN APP

First off, I'd just like to thank you for checking out my project.  If you have any questions for me, shoot me an email at macfarlanebrody@gmail.com.


## STEP ONE

Make sure you have node and npm installed, clone the repo, change directory into /FULL-STACK-APP and run

`npm install`

in your terminal/command-line.


## STEP TWO

Next, run npm start, and fire up a node server on the root directory.


## STEP THREE

For authentication to work, you must have a .env file in the root of the project with the following information from a Auth0 client, and a postgres (easiest: heroku) database.

Remove brackets! :)

```
SECRET={ANY STRING YOU WANT}

AUTH_DOMAIN={YOUR AUTH0 DOMAIN}

AUTH_CLIENTID={YOU AUTH0 CLIENT ID}

AUTH_CLIENTSECRET={YOUR AUTH0 CLIENT SECRET}

AUTH_CALLBACK=http://localhost:3535/auth/callback

CONNECTION_STRING={YOUR POSTGRES DATABASE CONNECTION STRING}
```


## STEP FOUR

Open your browser to localhost:3000, and enjoy.