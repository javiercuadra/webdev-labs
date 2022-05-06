/*
    Hints:
    1. Attach click event handlers to all four of the
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag
       based on the button that was clicked.
*/

const applyDefaultTheme = () => {
   // alert('make smaller!');
   document.querySelector("body").className = ""
};

const applyOceanTheme = () => {
   // alert('make smaller!');
   document.querySelector("body").className = "ocean"
};

const applyDesertTheme = () => {
   // alert('make smaller!');
   document.querySelector("body").className = "desert"
};

const applyHighContrastTheme = () => {
   // alert('make smaller!');
   document.querySelector("body").className = "high-contrast"
};

document.getElementById('default').addEventListener('click', applyDefaultTheme);
document.getElementById('ocean').addEventListener('click', applyOceanTheme);
document.getElementById('desert').addEventListener('click', applyDesertTheme);
document.getElementById('high-contrast').addEventListener('click', applyHighContrastTheme);
