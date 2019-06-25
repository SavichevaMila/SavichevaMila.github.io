var section = document.querySelector('aside');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var townData = request.response;
  showData(townData);
}


function showData(jsonObj) {
  var towns = jsonObj['towns'];

  
  for (var i = 0; i < towns.length; i++) { 
    if (towns[i].name=="Preston"||towns[i].name=="Soda Springs"||towns[i].name=="Fish Haven"){
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    myH2.className="orange";
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myImg = document.createElement('img');
    

   myH2.textContent = towns[i].name;
   myH3.textContent = towns[i].motto;
   myPara1.textContent = 'Year Founded: ' + towns[i].yearFounded;
    myPara2.textContent = 'Current Population: ' + towns[i].currentPopulation;
    myPara3.textContent = 'Average Rainfall:' + towns[i].averageRainfall;
    if (towns[i].name=="Preston"){
      myImg.setAttribute('src','images/'); 
      myImg.setAttribute('alt','View of lake and mountains');
    }
    else if (towns[i].name=="Soda Springs"){
      myImg.setAttribute('src','images/soda.jpg'); 
      myImg.setAttribute('alt','Country view of round hay bell.');
    }
    else if (towns[i].name=="Fish Haven"){
      myImg.setAttribute('src','images/fish.jpg'); 
      myImg.setAttribute('alt','View of mountains and a small cabin');
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myH3);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myImg);

    section.appendChild(myArticle);
  }
}
}