var t = parseFloat(document.getElementById("high").innerHTML);
var s = parseFloat(document.getElementById("speed").innerHTML);
var result = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
document.getElementById('output').innerHTML="Wind Chill:"+" "+result.toFixed(1)+"&#8457";

