let weatherRequest = new XMLHttpRequest();
let apiURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5771960&units=imperial&APPID=62e87ca2c7400a7b300db9de2e2390c9";
  weatherRequest.open('Get', apiURLstring, true);
  weatherRequest.send();
  
  weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    //   console.log(weatherData);
  
    document.getElementById("currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("temp").innerHTML = weatherData.main.temp;
    document.getElementById("windSpeed").innerHTML = weatherData.wind.speed;
  
    var tempF = parseInt(document.getElementById("temp").innerHTML);
    var speed = parseInt(document.getElementById("windSpeed").innerHTML);
    var chill = windChill(tempF, speed);
  
    var digits = 2;
    var multiplier = Math.pow(10, digits);
    chill = Math.round(chill * multiplier) / multiplier;
    document.getElementById("windchill").innerHTML = chill;
  
    function windChill(tempF, speed) {
      result =
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * tempF * Math.pow(speed, 0.16);
      return result;
    }
    document.getElementById("windchill").innerHTML = chill;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
  };
  