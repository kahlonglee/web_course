setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  // hour = hour < 10 ? "0" + hour : hour;

  function getHour() {
    if (hour < 10) {
      return "0" + hour;
    } else {
      return hour;
    }
  }

  hour = getHour();

  // min = min < 10 ? "0" + min : min;

  function getMin() {
    if (min < 10) {
      return "0" + min;
    } else {
      return min;
    }
  }

  min = getMin();

  // sec = sec < 10 ? "0" + sec : sec;

  function getSec() {
    if (sec < 10) {
      return "0" + sec;
    } else {
      return sec;
    }
  }
  sec = getSec();

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  document.getElementById("clock").innerHTML = currentTime;
}
showTime();
