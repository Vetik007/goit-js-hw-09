const refs = {
startBtn: document.querySelector('[data-start]'),
stopBtn: document.querySelector('[data-stop]'),
}

let randomColorId = null;
refs.stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.startBtn.addEventListener('click', colorStartBtn);
refs.stopBtn.addEventListener('click', colorStopBtn);

// function randomColor() {
//     document.body.style.backgroundColor = getRandomHexColor();
// }

function colorStartBtn() {

    // randomColorId = setInterval(randomColor, 1000);
    // console.log('hi');
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    // console.log('hi');

    randomColorId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

function colorStopBtn() {
    
    // console.log('bye');
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    // console.log('bye');

    clearInterval(randomColorId);
};

