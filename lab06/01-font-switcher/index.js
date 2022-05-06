const RESIZE_MAGNITUDE = 10

const resizeElement = (element, resizeAmount) => {
   let divElement = document.querySelector(element)
   let divElementFontSize = parseFloat(window.getComputedStyle(divElement, null).getPropertyValue('font-size'));

   divElement.style.fontSize = (divElementFontSize + resizeAmount) + "px"
}

const makeBigger = () => {
   // alert('make bigger!');
   resizeElement("div.content", RESIZE_MAGNITUDE)
   resizeElement("h1", RESIZE_MAGNITUDE)
};

const makeSmaller = () => {
   // alert('make smaller!');
   resizeElement("div.content", -RESIZE_MAGNITUDE)
   resizeElement("h1", -RESIZE_MAGNITUDE)
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
