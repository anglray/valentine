const texts = [
  "You can’t choose no!!",
  "Please think again",
  "Are you sure?",
  "I will cry",
  "That’s not your choice"
];

const images = [
  "sad1.png",
  "sad2.png",
  "sad3.png",
  "sad4.png"
];

let count = 0;

function noClick() {
  if (count < texts.length) {
    document.getElementById("text").innerText = texts[count];

    if (count < images.length) {
      document.getElementById("mainImage").src = images[count];
    }

    count++;
  }
}

function yesClick() {
  document.body.innerHTML = 
    <div style="text-align:center;">
      <h1 style="color:#ff6f9f;">I knew it 💗</h1>
      <p>You’re mine now.</p>
    </div>
  ;
}
