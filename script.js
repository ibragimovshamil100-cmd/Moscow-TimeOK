let is24 = true;
let english = false;

function updateClock() {
  const now = new Date();

  const time = new Intl.DateTimeFormat(
    english ? "en-US" : "ru-RU",
    {
      timeZone: "Europe/Moscow",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: is24 ? "h23" : "h12"
    }
  );

  const date = new Intl.DateTimeFormat(
    english ? "en-US" : "ru-RU",
    {
      timeZone: "Europe/Moscow",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

  document.getElementById("time").textContent =
    time.format(now);

  document.getElementById("date").textContent =
    date.format(now);

  document.getElementById("location").textContent =
    english ? "MOSCOW, RUSSIA" : "МОСКВА, РОССИЯ";
}

document.getElementById("format").onclick = function() {
  is24 = !is24;
  this.textContent = is24 ? "24ч" : "12ч";
  updateClock();
};

document.getElementById("language").onclick = function() {
  english = !english;
  this.textContent = english ? "EN" : "RU";
  updateClock();
};

updateClock();
setInterval(updateClock, 1000);
