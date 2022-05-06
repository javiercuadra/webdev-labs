/*
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const dyslexiaToggleButton =  document.getElementById('dyslexia-toggle')
const isDyslexiaModeOn = window.localStorage.getItem('dyslexic');

if(isDyslexiaModeOn) {
  document.body.classList.add('dyslexia-mode');
  dyslexiaToggleButton.setAttribute('aria-pressed', 'true');
}

dyslexiaToggleButton.addEventListener('click', (e) => {
  let pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', String(!pressed));
  document.body.classList.toggle('dyslexia-mode');
  window.localStorage.setItem('dyslexic', String(!pressed));
});
