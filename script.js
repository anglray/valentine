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

noBtn.addEventListener("click", () => {
  
  const currentIndex = Math.min(index, noImages.length - 1);

  text.textContent = noTexts[currentIndex];
  image.src = noImages[currentIndex];

 
  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;

  
  noScale -= 0.15;
  if (noScale < 0.3) noScale = 0.3;
  noBtn.style.transform = `scale(${noScale})`;

  index++;
});

yesBtn.addEventListener("click", () => {
  text.textContent = "Yaaay 💗";
  image.src = "KURT.jpg";

  
  noBtn.disabled = true;
});
