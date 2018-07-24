const request = require('request');
const argv = require('yargs').argv;

let apiKey = '1a93796ff9e54d849be4786794a606d1';
let city = argv.c || 'Sarasota';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  	let weather = JSON.parse(body)
  	let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;

	console.log(message);
    console.log('body:', body);
  }
});