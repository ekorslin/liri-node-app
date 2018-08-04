var keys = require('./keys')
var Spotify = require('node-spotify-api');
var nodeArgs = process.argv;
var command = nodeArgs[2];
// __________________ Spotify-This-Song ____________________________
  if (command == "spotify-this-song" && nodeArgs.length > 3) {
      var trackInput = "";
        for (var i = 3; i < nodeArgs.length; i++) {
          if (i > 3 && i < nodeArgs.length) {
            trackInput = trackInput + " " + nodeArgs[i];
          } else {
            trackInput += nodeArgs[i];
          }}
        var spotify = new Spotify(keys.spotify);
        spotify.search({ type: 'track', query: trackInput}, function(err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
          } else {
          var songInfo = data.tracks.items[0];
            console.log("Artist: " + songInfo.artists[0].name)
            console.log("Song Name: " + songInfo.name)
            console.log("Track Preview: " + songInfo.preview_url)
            console.log("Album: " + songInfo.album.name)
          }})} else if (command == "spotify-this-song" && nodeArgs.length < 4) {
            var spotify = new Spotify(keys.spotify);
            spotify.search({ type: 'track', query: 'the sign ace of base'}, function(err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                    } else {
                    var songInfo = data.tracks.items[0];
                        console.log("Artist: " + songInfo.artists[0].name)
                        console.log("Song Name: " + songInfo.name)
                        console.log("Track Preview: " + songInfo.preview_url)
                        console.log("Album: " + songInfo.album.name)
        // _____________________________________________ Movie This! ___________
          }})} else if (command == "movie-this" && nodeArgs.length == 3) {
              var request = require("request");
              var movieName = "mr+nobody";   
          request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
          if (!error && response.statusCode === 200) {
          console.log("The movie's title is: " + JSON.parse(body).Title);
          console.log("Realeased: " + JSON.parse(body).Year);
          console.log("imdb Rating: " + JSON.parse(body).imdbRating);
          console.log("Language: " + JSON.parse(body).Language);
          console.log("Plot: " + JSON.parse(body).Plot);
          console.log("Cast: " + JSON.parse(body).Actors);
          }})} else if (command == "movie-this" && nodeArgs.length > 3 ) {
            var request = require("request");
            var nodeArgs = process.argv;
            var movieName = "";
            for (var i = 3; i < nodeArgs.length; i++) {
              if (i > 3 && i < nodeArgs.length) {
                movieName = movieName + "+" + nodeArgs[i];
              } else {
                movieName += nodeArgs[i];
              }}
        request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
        if (!error && response.statusCode === 200) {
        console.log("The movie's title is: " + JSON.parse(body).Title);
        console.log("Realeased: " + JSON.parse(body).Year);
        console.log("imdb Rating: " + JSON.parse(body).imdbRating);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Cast: " + JSON.parse(body).Actors);
        // ______________ Twitter ____________________________________
        }})} else if (command == "my-tweets") {
            var Twitter = require('twitter');
            var client = new Twitter(keys.twitter);
            var options = { screen_name: 'EricKorslin',
                            count: 20 };
            
            client.get('statuses/user_timeline', options , function(err, data) {
              for (var i = 0; i < data.length ; i++) {
                console.log("_________________________________");
                console.log("Tweet No." + [i + 1])
                console.log("Tweet: " + data[i].text);
                console.log("  Posted: " + data[i].created_at);
                // console.log("_________________________________");
              }});
           } else if (command == "do-what-it-says") {
       // _____________ Do What it Says ____________________________
 
          var fs = require("fs");
          fs.readFile("random.txt", "utf8", function(error, data) {
            if (error) {
              return console.log(error);
            }
            var dataArr = data.split(",");
            var trackInput = dataArr[1];
            var spotify = new Spotify(keys.spotify);
            spotify.search({ type: 'track', query: trackInput}, function(err, data) {
              if (err) {
                return console.log('Error occurred: ' + err);
              } else {
              var songInfo = data.tracks.items[0];
                console.log("Artist: " + songInfo.artists[0].name)
                console.log("Song Name: " + songInfo.name)
                console.log("Track Preview: " + songInfo.preview_url)
                console.log("Album: " + songInfo.album.name)
          }})})};