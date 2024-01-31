background = document.getElementById('background')
font = document.querySelector('#font')
position = document.querySelector('#position')
h1 = document.querySelector('h1')
button = document.querySelector('button')
text = document.getElementById('display-text')
label = document.querySelector('label')
lineheight =  document.getElementById('lineheight')
dyslexia = document.getElementById('dyslexia')

// assigning the accessible background fcolor and the text color for a better readability
background.addEventListener('click', function(){
    console.log('works')
    var randColors = ['rgb(138,43,226)', 'rgb(253,243,212)','#ff00ff', '#4d102c']
    var randColors = {
        'rgb(138,43,226)' : 'rgb(253,243,212)',
        '#ff00ff' : '#4d102c',
        '#00ffff' : '#0b2811',
        '#ffffff' : '#402d26',
        '#000000' : '#89955d',
        '#4b3bfd' : '#00ff7f',
        '#ff69b4' : '#223649',
        '#06085e' : '#ee82ee',
        '#63203e' : '#ee82ee'
    }
    const index1 = getRandomArbitrary(0, 9);
    document.body.style.backgroundColor = Object.keys(randColors)[index1]
    h1.style.color= Object.values(randColors)[index1];
    dyslexia.style.color= Object.values(randColors)[index1];
    text.style.color= Object.values(randColors)[index1];
    label.style.color= Object.values(randColors)[index1];
    button.style.backgroundColor = Object.values(randColors)[index1];
    button.style.color = Object.keys(randColors)[index1]
    lineheight.style.color= Object.values(randColors)[index1];
})

// function that creates a random number
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const fontSizeSlider = document.getElementById("font-size-slider");
const displayText = document.getElementById("display-text");

// adjusting the font-size for the slider 
fontSizeSlider.addEventListener("input", () => {
  const fontSize = fontSizeSlider.value;
  displayText.style.fontSize = `${fontSize}px`;
  h1.style.fontSize = `${fontSize}px`
});

const lineHeightSLider = document.getElementById('line-height-slider')
// adjusting the line height for the line-height slider
lineHeightSLider.addEventListener('input', () => {
    const lineHeight = lineHeightSLider.value;
    displayText.style.lineHeight = `${lineHeight}rem`
})

var lastClickedRadio = null;
var defaultFont = "Times New Roman"; 

function toggleRadio(radio, font) {
    if (radio === lastClickedRadio) {
        // If the radio button is uncklicked then go back to the initial font-size
        radio.checked = false;
        text.style.fontFamily = defaultFont;
        lastClickedRadio = null;
    } else {
        // Change font and update last clicked radio
        text.style.fontFamily = font;
        label.style.fontFamily = font;
        h1.style.fontFamily = font;
        lineheight.style.fontFamily = font;
        lastClickedRadio = radio;
    }
}