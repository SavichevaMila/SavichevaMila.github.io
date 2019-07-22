let weatherRequest = new XMLHttpRequest();
let apiURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5586437&units=imperial&APPID=62e87ca2c7400a7b300db9de2e2390c9";
  weatherRequest.open('Get', apiURLstring, true);
  weatherRequest.send();
  
  weatherRequest.onload = function () {
      let weatherData = JSON.parse(weatherRequest.responseText);
      console.log(weatherData);
     
  
      document.getElementById('current3').innerHTML = weatherData.weather[0].main;
      document.getElementById('high3').innerHTML = weatherData.main.temp_max;
      document.getElementById('humidity3').innerHTML = weatherData.main.humidity;
      document.getElementById('speed3').innerHTML = weatherData.wind.speed;
      displayWindChill()
      
  }