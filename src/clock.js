const timeBoard = document.querySelector('#clock p');

function getTime() {
  const date = new Date();
  const curYear = date.getFullYear();
  const curMonth = date.getMonth() + 1;
  const curDate = date.getDate();
  const curHour = date.getHours();
  const curMin = date.getMinutes();
  const curSec = date.getSeconds();

  const curTime = `${curYear}년 ${curMonth}월 ${curDate}일 ${curHour}:${curMin}:${curSec}`;

  timeBoard.innerText = curTime;
}

setInterval(getTime, 1000);
