function updateClock() {
  var now = new Date();     // current date  and time

  var hours = now.getHours();
  // console.log(hours);
  var minutes = now.getMinutes();
  // console.log(minutes);
  var seconds = now.getSeconds();
  // console.log(seconds);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerHTML = timeString;

}

// Call updateClock() every second
setInterval(updateClock, 1000);

updateClock();