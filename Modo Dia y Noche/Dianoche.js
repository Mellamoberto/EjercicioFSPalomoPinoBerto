const modeBtn = document.getElementById('mode-btn');
const body = document.body;

modeBtn.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  if (body.classList.contains('night-mode')) {
    modeBtn.innerText = 'Cambiar a modo día';
  } else {
    modeBtn.innerText = 'Cambiar a modo noche';
  }
});