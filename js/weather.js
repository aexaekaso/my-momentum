const API_KEY = "43b6a580963a84063b25a5d90fe5fc46";
const arrOutfit = [
  "a sleeveless, a t-shirt and a shorts pants",  //28~
  "a t-shirt, a long sleeve and a long pants", //22~27
  "a sweater, a sweatshirt, a cardigan and a long pants", //16~21
  "a jacket, a trench coat and a long pants", //10~15
  "a wool coat, a padded coat and a scarf" //~10
];

function handleNowOutfit(nowTemp) {
  const nowOutfit = document.querySelector("#weather .now-outfit");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  
  p1.innerText = "I think it's better for you to wear";
  p3.innerText = "Have a nice day :)"
  p2.classList.add("emphasis");

  if (nowTemp >= 28) {
    p2.innerText = ` ${arrOutfit[0]}!`;
  } else if (nowTemp >=22) {
    p2.innerText = ` ${arrOutfit[1]}!`;
  } else if (nowTemp >= 16) {
    p2.innerText = ` ${arrOutfit[2]}!`;
  } else if (nowTemp >= 10) {
    p2.innerText = ` ${arrOutfit[3]}!`;
  } else {
    p2.innerText = ` ${arrOutfit[4]}!`;
  }
  
  nowOutfit.appendChild(p1);
  nowOutfit.appendChild(p2);
  nowOutfit.appendChild(p3);
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const location = document.querySelector("#weather .now-weather span:first-child");
      const weatherIcon = document.querySelector("#weather .now-weather img");
      const weather = document.querySelector("#weather .now-weather span:nth-child(3)");
      const temperature = document.querySelector("#weather .now-weather span:nth-child(4)");

      location.innerText = data.name;
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.innerText = data.weather[0].main;
      temperature.innerText = Math.round(data.main.temp) + "°C";

      handleNowOutfit(data.main.temp);
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);