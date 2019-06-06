function currentDate() {
    var today = new Date();    
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];    
    var nowDate = today.getDay();
    var day = today.getDate();     // Get current date
    var month = monthNames[today.getMonth()]; // current month
    var year = today.getFullYear();
        
   document.getElementById("displayDate").innerHTML = nowDate + " , " + day + " " + month + " " + year;
}
currentDate();
  