const colors = ["salmon", "lightsalmon", "rgba(69,169,154)", "#FAC8CF"];

const btn = document.getElementById('btn');
const span = document.querySelector('.color');

btn.addEventListener('click', () => {
    console.log(getRandomNumber());
    document.body.style.backgroundColor = colors[randomNumber];
    span.textContent = colors[randomNumber];
    span.style.color = colors[randomNumber];
});

const getRandomNumber = () => {
  return randomNumber = Math.floor(Math.random()*4);
}