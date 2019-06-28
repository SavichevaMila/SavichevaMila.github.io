let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=72df453963898aec74e5ae6d54739d93';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
   

    document.getElementById('current').innerHTML = weatherData.weather[0].main;
    document.getElementById('high').innerHTML = weatherData.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('speed').innerHTML = weatherData.wind.speed;
    displayWindChill();
    
}