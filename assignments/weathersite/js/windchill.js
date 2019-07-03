function displayWindChill(){
    var temp = parseFloat(document.getElementById("high").innerHTML);
    var wspeed = parseFloat(document.getElementById("speed").innerHTML);
    var chill = windChill(temp, wspeed);
    console.log("hello");
    document.getElementById("windChill").innerHTML = chill.toFixed(1);
    }
    function windChill(high, speed) {
        var sp = Math.pow(speed, 0.16);
        var result = 35.74 + (0.6215 * high) - (35.75 * sp) + (0.4275 * high * sp);
        return result;
    }