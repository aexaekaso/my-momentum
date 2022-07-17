const todayClock = document.querySelectorAll(".clock-date-info #clock");
const todayDate = document.querySelectorAll(".clock-date-info #date");

const arrWeekday = ['월', '화', '수', '목', '금', '토', '일'];

function getClockAndDate() {
  const date = new Date();

  const months = date.getMonth() + 1;
  const dates = date.getDate();
  const days = arrWeekday[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  todayDate.forEach((value, index, array) => {
    value.innerText = `${months}월 ${dates}일 ${days}요일`;
  });
  todayClock.forEach((value, index, array) => {
    value.innerText = `${hours}:${minutes}:${seconds}`;
  });
}

getClockAndDate();
setInterval(getClockAndDate, 1000);