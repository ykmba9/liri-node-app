# liri-node-app

In this assignment, challenge was to use Node JS to create a LIRI bot, like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data based on one of four commands:

*my-tweets

*spotify-this-song

*movie-this

*do-what-it-says

# Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/

# Getting started
*Make a new GitHub repository called liri-node-app and clone it to computer.
*Run command 'npm install' in GitBash/Terminal.
**Run commands: 
**node liri.js my-tweets
    *It displays my last 20 tweets and when they were created in terminal/bash window.
**node liri.js spotify-this-song <song name>
    *It shows the following information about the song in terminal/bash window:

*The song's name
*A preview link of the song from Spotify
*The album that the song is taken from
*Or if no song is passed through, it will default to *"Florescent Adolescent" by Arctic Monkeys

**node liri.js movie-this <movie name>
    *Shows the following information in terminal/bash:

*Title of the movie.
*Year the movie came out.
*IMDB Rating of the movie.
*Country where the movie was produced.
*Language of the movie.
*Plot of the movie.
*Actors in the movie.
*Rotten Tomatoes Rating.
*Rotten Tomatoes URL.
*Or if no movie is passed through, it will default to "Mr. Nobody"

**node liri.js do-what-it-says
    *Takes the text from random.txt and runs the song through spotify-this-song command
**Tech used
    *Node.js
Twitter NPM Package - https://www.npmjs.com/package/twitter
Node-Spotify-API NPM Package - https://www.npmjs.com/package/node-spotify-api
Request NPM Package - https://www.npmjs.com/package/request
OMDB API - http://www.omdbapi.com
DotEnv - https://www.npmjs.com/package/dotenv

**Built With
    *Git Bash Text Editor
