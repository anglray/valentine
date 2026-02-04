const noTexts = [
  "Please think again",
  "Are you sure?",
  "I will cry",
  "That’s not your choice"
];

const noImages = [
  "sad1.gif",
  "sad2.gif",
  "sad3.gif",
  "sad4.gif"
];

let index = 0;
let yesScale = 1;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.getElementById("text");
const image = document.getElementById("mainImage");

noBtn.addEventListener("click", () => {
  if (index < noTexts.length) {
    text.textContent = noTexts[index];
    image.src = noImages[index];

    
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    index++;
  }
});

yesBtn.addEventListener("click", () => {
  text.textContent = "Yaaay 💗";
  image.src = "KURT.jpg"; 
});
