let weatherRequest = new XMLHttpRequest();
let apiURLstring =
  "https://api.openweathermap.org/data/2.5/weather?zip=84010&units=imperial&APPID=62e87ca2c7400a7b300db9de2e2390c9";
  weatherRequest.open('Get', apiURLstring, true);
  weatherRequest.send();
  
  weatherRequest.onload = function () {
      let weatherData = JSON.parse(weatherRequest.responseText);
      console.log(weatherData);
     
  
      document.getElementById('current4').innerHTML = weatherData.weather[0].main;
      document.getElementById('high4').innerHTML = weatherData.main.temp_max;
      document.getElementById('humidity4').innerHTML = weatherData.main.humidity;
      document.getElementById('speed4').innerHTML = weatherData.wind.speed;
      displayWindChill()
      
  }