function currentDate() {
    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];    
    var currentDate = weekday[today.getDate()];
    var day = today.getDate();     // Get current date
    var month = monthNames[today.getMonth()]; // current month
    var year = today.getFullYear();
        
   document.getElementById("displayDate").innerHTML = currentDate + " , " + day + " " + month + " " + year;
}
currentDate();
  