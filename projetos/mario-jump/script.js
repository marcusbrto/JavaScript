const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameBoard = document.querySelector('.game-board');

let isJumping = false;

// pulo
const jump = () => {
  if (isJumping) return;

  isJumping = true;
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
    isJumping = false;
  }, 600);
};

// game over
const gameOver = (pipePosition, marioPosition) => {
  pipe.style.animation = 'none';
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = 'none';
  mario.style.bottom = `${marioPosition}px`;

  mario.src = './images/game-over.png';
  mario.style.width = '75px';
  mario.style.marginLeft = '50px';
};

// loop principal
const loop = () => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  const pipeHeight = 80;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < pipeHeight) {
    gameOver(pipePosition, marioPosition);
    return;
  }

  requestAnimationFrame(loop);
};

loop();

// controle teclado
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') jump();
  if (event.code === 'Enter') location.reload();
});

// 🌙☀️ ciclo dia/noite
setInterval(() => {
  gameBoard.classList.toggle('night');
}, 8000);
