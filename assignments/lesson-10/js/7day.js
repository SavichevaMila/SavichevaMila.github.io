function myFunction(today) {

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[today];
    return n;

}
let forecastRequest = new XMLHttpRequest();
let url = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=72df453963898aec74e5ae6d54739d93';
forecastRequest.open('Get', url, true);
forecastRequest.send();

forecastRequest.onload = function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    let list = forecastData.list;
    console.log("the list", list);
   
    var thead = document.querySelector('thead');
    var tbody = document.querySelector('tbody');
    var d = new Date();
    var today = d.getDay();
    var myTr = document.createElement('tr');
    var myTr2 = document.createElement('tr');
    var myTr3 = document.createElement('tr');

    for (var i = 0; i < list.length; i++) {
        var time = list[i].dt_txt;
        var myTh = document.createElement('th');
        var myTd = document.createElement('td');
        var myTd2 = document.createElement('td');
        var myImg = document.createElement('img');
        //console.log("time", time);
        if (time.includes('18:00:00')) {
            if (today == 7) {
                today = 0;
            }
            var dayName = myFunction(today);
            console.log(dayName);
            today++;
            console.log("hour 18");
            console.log("temp", list[i].main.temp);
            var temp = list[i].main.temp;
            console.log("icon", list[i].weather[0].icon);

            let iconPath = "https://openweathermap.org/img/w/" +
                list[i].weather[0].icon + ".png";
            console.log(iconPath);
            myImg.setAttribute('src', iconPath);
            myImg.setAttribute('alt', list[i].weather[0].description);
            myTh.textContent = dayName;
            myTd.appendChild(myImg);
            myTd2.textContent = temp;

            console.log(myTd);
            myTr.appendChild(myTh);
            myTr2.appendChild(myTd);
            myTr3.appendChild(myTd2);




        }
        thead.appendChild(myTr);
        tbody.appendChild(myTr2);
        tbody.appendChild(myTr3);
        console.log(thead);
        console.log(tbody);
    }

}
