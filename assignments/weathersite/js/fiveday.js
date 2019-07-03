function myFunction(today) {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var name = days[today];
    return name;
  }
  
  var thead = document.querySelector("thead");
  var tbody = document.querySelector("tbody");
  
  let forecastRequest = new XMLHttpRequest();
  let apiURLstring2 =
    "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=25f95d7b36b3ee23a983accb3604e8ae";
  forecastRequest.open("GET", apiURLstring2, true);
  forecastRequest.send();
  
  forecastRequest.onload = function() {
    var forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);
  
    var d = new Date();
    var today = d.getDay();
  
    var list = forecastData.list;
    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");
  
    for (i = 0; i < list.length; i++) {
      var th = document.createElement("th");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var img = document.createElement("img");
  
      if (list[i].dt_txt.includes("18:00:00")) {
        console.log("found it");
  
        if (today == 7) {
          today = 0;
        }
        var nameOfDay = myFunction(today);
        today++;
  
        var temp = list[i].main.temp;
        var icon =
          "http://openweathermap.org/img/w/" + list[i].weather[0].icon + ".png";
        var desc = list[i].weather[0].description;
  
        th.textContent = nameOfDay;
        img.setAttribute("src", icon);
        img.setAttribute("alt", desc);
        td1.appendChild(img);
        td2.textContent = temp + "\xB0F";
  
        tr1.appendChild(th);
        tr2.appendChild(td1);
        tr3.appendChild(td2);
      }
      thead.appendChild(tr1);
      tbody.appendChild(tr2);
      tbody.appendChild(tr3);
    }
  }