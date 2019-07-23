let weatherRequest4 = new XMLHttpRequest();
let apiURLstring4 =
  "https://api.openweathermap.org/data/2.5/weather?id=5327455&units=imperial&APPID=62e87ca2c7400a7b300db9de2e2390c9";
  weatherRequest4.open('Get', apiURLstring4, true);
  weatherRequest4.send();
  
  weatherRequest4.onload = function() {
    var weatherData4 = JSON.parse(weatherRequest4.responseText);
    
    document.getElementById("current4").innerHTML = weatherData4.weather[0].main;
    document.getElementById("temp4").innerHTML = weatherData4.main.temp;
    document.getElementById("windSpeed4").innerHTML = weatherData4.wind.speed;
  
    var tempF4 = parseInt(document.getElementById("temp4").innerHTML);
    var speed4 = parseInt(document.getElementById("windSpeed4").innerHTML);
    var chill4 = windChill4(tempF4, speed4);
  
    function windChill4(tempF4, speed4) {
      result4 = 35.74 + 0.6215 * tempF4 - 35.75 * Math.pow(speed4, 0.16) + 0.4275 * tempF4 * Math.pow(speed4, 0.16);
      return result4;
    }
    document.getElementById("windchill4").innerHTML = chill4.toFixed(1);
    document.getElementById("humidity4").innerHTML = weatherData4.main.humidity;
  };