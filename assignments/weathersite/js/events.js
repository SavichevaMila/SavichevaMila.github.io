var div = document.getElementById("events");

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var data = request.response;
  showData(data);
};
function showData(jsonObj) {
  var eventData = jsonObj["towns"];

  for (var i = 0; i < eventData.length; i++) {
    if (eventData[i].name == "Preston") {
      //   console.log(string);

      var myul = document.createElement("ul");

      var events = eventData[i].events;
      for (var k = 0; k < events.length; k++) {
        var myli = document.createElement("li");
        myli.textContent = events[k];
        myul.appendChild(myli);
      }

      div.appendChild(myul);
    }
  }
}
