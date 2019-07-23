let weatherRequest2 = new XMLHttpRequest();
let apiURLstring2 =
  "https://api.openweathermap.org/data/2.5/weather?id=5784504&units=imperial&APPID=62e87ca2c7400a7b300db9de2e2390c9";
  weatherRequest2.open('Get', apiURLstring2, true);
  weatherRequest2.send();
  
  weatherRequest2.onload = function() {
    var weatherData2 = JSON.parse(weatherRequest2.responseText);
    
    document.getElementById("current2").innerHTML = weatherData2.weather[0].main;
    document.getElementById("temp2").innerHTML = weatherData2.main.temp;
    document.getElementById("windSpeed2").innerHTML = weatherData2.wind.speed;
  
    var tempF2 = parseInt(document.getElementById("temp2").innerHTML);
    var speed2 = parseInt(document.getElementById("windSpeed2").innerHTML);
    var chill2 = windChill2(tempF2, speed2);
  
    function windChill2(tempF2, speed2) {
      result2 = 35.74 + 0.6215 * tempF2 - 35.75 * Math.pow(speed2, 0.16) + 0.4275 * tempF2 * Math.pow(speed2, 0.16);
      return result2;
    }
    document.getElementById("windchill2").innerHTML = chill2.toFixed(1);
    document.getElementById("humidity2").innerHTML = weatherData2.main.humidity;
  };
  