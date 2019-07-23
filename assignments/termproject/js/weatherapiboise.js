let weatherRequest3 = new XMLHttpRequest();
let apiURLstring3 =
  "https://api.openweathermap.org/data/2.5/weather?id=5586437&units=imperial&APPID=62e87ca2c7400a7b300db9de2e2390c9";
  weatherRequest3.open('Get', apiURLstring3, true);
  weatherRequest3.send();
  
  weatherRequest3.onload = function() {
    var weatherData3 = JSON.parse(weatherRequest3.responseText);
    //   console.log(weatherData);
  
    document.getElementById("currently3").innerHTML = weatherData3.weather[0].main;
    document.getElementById("temp3").innerHTML = weatherData3.main.temp;
    document.getElementById("windSpeed3").innerHTML = weatherData3.wind.speed;
  
    var tempF3 = parseInt(document.getElementById("temp3").innerHTML);
    var speed3 = parseInt(document.getElementById("windSpeed3").innerHTML);
    var chill3 = windChill(weatherData3.main.temp, weatherData3.wind.speed);
  
    var digits3 = 2;
    var multiplier3 = Math.pow(10, digits3);
    chill = Math.round(chill3 * multiplier3) / multiplier3;
    document.getElementById("windchill3").innerHTML = chill3;
  
    function windChill(tempF3, speed3) {
      result3 =
        35.74 +
        0.6215 * tempF3 -
        35.75 * Math.pow(speed3, 0.16) +
        0.4275 * tempF * Math.pow(speed3, 0.16);
      return result3;
    }
    document.getElementById("windchill3").innerHTML = chill3;
    document.getElementById("humidity3").innerHTML = weatherData3.main.humidity;
  };
  