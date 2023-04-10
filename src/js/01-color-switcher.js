
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]');

// console.log(startBtn);

const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', colorStartBt);
stopBtn.addEventListener('click', colorStopBtn);

function randomColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function colorStartBt() {
    randomColorId = setInterval(randomColor, 1000);
    // console.log('hi');
    startBtn.disabled = true;
    stopBtn.disabled = false;
    // console.log('hi');
};

function colorStopBtn() {
    clearInterval(randomColorId);
    // console.log('bye');
    startBtn.disabled = false;
    stopBtn.disabled = true;
    // console.log('bye');
};

