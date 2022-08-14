const x = document.getElementById("demo");
const y = document.getElementById("city");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  console.log(position.coords.latitude);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f379a4e0168359a210bbe2097bb136e8&units=metric`
  )
    .then((response) => {
      response.json().then((data) => {
        x.innerHTML = `${data.name}'da bu günə olan temperatur: ${data.main.temp}`;
      });
    })
    .catch((err) => console.log(err));
}

function getTemp() {
  const cityName = document.querySelector("input").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f379a4e0168359a210bbe2097bb136e8&units=metric`
  )
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        y.innerHTML = `${data.name}'da bu günə olan temperatur: ${data.main.temp}`;
      })
    )
    .catch((err) => console.log(err));
}
