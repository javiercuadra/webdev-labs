/*
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

isDyslexiaModeOn = false


const toggleDyslexiaMode = () => {

  isDyslexiaModeOn = !isDyslexiaModeOn

  if (!isDyslexiaModeOn){
    document.querySelector("body").className = ""
  }
  else{
    document.querySelector("body").className = "dyslexia-mode"
  }

  console.log(`Is dyslexia mode on? ${isDyslexiaModeOn}`)
}


document.getElementById('dyslexia-toggle').addEventListener('click', toggleDyslexiaMode);
