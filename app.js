let is24Hour = true;
function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();

  let ampm = "";

  if (!is24Hour) {
    ampm = hours >= 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
  }

  // hours = String( hours ).padStart(2,"0")
  //  minutes = String(minutes).padStart(2,"0")
  //  seconds = String(seconds).padStart(2,"0")

  //  console.log(hours);
  //  console.log(now);

  document.getElementById(
    "time"
  ).innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

function updateDate() {
  let now = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("date").innerText = now.toLocaleDateString(
    "en-US",
    options
  );
  //   console.log(options);
  //   console.log(now);
}

document.getElementById("formateToggle").addEventListener("click", function () {
  is24Hour = !is24Hour;
  this.innertext = is24Hour ? "Switchto 12-Hour" : "Switchto 12-Hour";
});

document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

setInterval(updateTime, 1000);
updateTime();
updateDate();
