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
let noScale = 1;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.getElementById("text");
const image = document.getElementById("mainImage");


const preloadedImages = [];
noImages.forEach(src => {
  const img = new Image();
  img.src = src;
  preloadedImages.push(img);
});

noBtn.addEventListener("click", () => {
  const i = index % noImages.length;

  
  image.src = preloadedImages[i].src;
  text.textContent = noTexts[i];

 
  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;

 
  noScale = Math.max(0.3, noScale - 0.15);
  noBtn.style.transform = `scale(${noScale})`;

  index++;
});

yesBtn.addEventListener("click", () => {
  text.textContent = "Yaaay 💗";
  image.src = "KURT.jpg";
  noBtn.disabled = true;
});
