var keys = require("./keys.js");
	

	var request = require('request');
	var Twitter = require('twitter');
	var Spotify = require('node-spotify-api');
	var fs = require('fs');
	var client = new Twitter(keys.twitter);
	var data = process.argv;
	var action = data[2];
	var input = data[3];
	

	switch (action) {
		case "my-tweets":
		twitter(input);
		break;
	

		case "spotify-this-song":
		spotify(input);
		break;
	

		case "movie-this":
		movie(input);
		break;
	

		case "do-what-it-says":
		doit();
		break;
	};
	

	function twitter(input) {
		var params = {screen_name: input, count: 20};
		
			client.get('statuses/user_timeline', params, function(error, tweets, response) {
				if (!error) {
					for (i = 0; i < tweets.length; i ++){
						console.log("Tweet: " + "'" + tweets[i].text + "'" + " Created At: " + tweets[i].created_at);
					}
				} else {
					console.log(error);
				}
			});
	

	}
	

	function spotify(input) {
	

		var spotify = new Spotify(keys.spotify);
			if (!input){
	        	input = 'The Sign';
	    	}
			spotify.search({ type: 'track', query: input }, function(err, data) {
				if (err){
		            console.log('Error occurred: ' + err);
		            return;
		        }
	

		        var songInfo = data.tracks.items;
		        console.log("Artist(s): " + songInfo[0].artists[0].name);
		        console.log("Song Name: " + songInfo[0].name);
		        console.log("Preview Link: " + songInfo[0].preview_url);
		        console.log("Album: " + songInfo[0].album.name);
		});
	}
	

	

	function movie(input) {
	

		var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=40e9cece";
	

		request(queryUrl, function(error, response, body) {
			if (!input){
	        	input = 'Mr Nobody';
	    	}
			if (!error && response.statusCode === 200) {
	

			    console.log("Title: " + JSON.parse(body).Title);
			    console.log("Release Year: " + JSON.parse(body).Year);
			    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
			    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
			    console.log("Country: " + JSON.parse(body).Country);
			    console.log("Language: " + JSON.parse(body).Language);
			    console.log("Plot: " + JSON.parse(body).Plot);
			    console.log("Actors: " + JSON.parse(body).Actors);
			}
		});
	};
	

	function doit() {
		fs.readFile('random.txt', "utf8", function(error, data){
	

			if (error) {
	    		return console.log(error);
	  		}
	

			// To make it more readable split it by commas. 
			var dataArr = data.split(",");
	

			
			if (dataArr[0] === "spotify-this-song") {
				var songcheck = dataArr[1].slice(1, -1);
				spotify(songcheck);
			} else if (dataArr[0] === "my-tweets") {
				var tweetname = dataArr[1].slice(1, -1);
				twitter(tweetname);
			} else if(dataArr[0] === "movie-this") {
				var movie_name = dataArr[1].slice(1, -1);
				movie(movie_name);
			} 
			
	  	});
	

	};

