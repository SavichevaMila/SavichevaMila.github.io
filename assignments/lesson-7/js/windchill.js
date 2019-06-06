var temp = parseFloat(document.getElementById("t").innerHTML);
    var speed = parseFloat(document.getElementById("s").innerHTML);
    var chill = windChill(temp, speed);
console.log("hello");
    document.getElementById("windChill").innerHTML = chill.toFixed(1); 
    function windChill(t, s) {
    var sp = Math.pow(s, 0.16);
    var result = 35.74 + (0.6215 * t) - (35.75 * sp) + (0.4275 * t * sp);
    return result;
}
