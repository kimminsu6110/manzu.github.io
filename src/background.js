const body = document.querySelector('body');
const img = document.createElement('img');
function getRandmonNum() {
  return Math.floor(Math.random() * 6 + 1);
}

const num = getRandmonNum();
img.src = `./static/${num}.jpg`;
body.appendChild(img);
