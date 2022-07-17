const wallpaper = document.querySelectorAll(".wallpaper");
const arrWallpaper = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const chosenWallpaper = arrWallpaper[Math.floor(Math.random() * arrWallpaper.length)];

wallpaper.forEach((value, index, array) => {
  value.style.backgroundImage = `url(assets/${chosenWallpaper})`;
  value.style.backgroundRepeat = `no-repeat`;
  value.style.backgroundSize = `cover`;
  value.style.backgroundPosition = `center center`;
});