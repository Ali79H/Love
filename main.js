var myAudio = document.getElementById("myAudio");
const tchange = document.getElementById("change");
const body = document.body;
const section = document.getElementById("section")
const played= document.getElementById("play")

function play() {
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}



const texts = [
  { text: "", theme: { bgColor: "#FEF4EA", image: "imgs/photo_2024-02-13_11-53-57.jpg" } },
  {
    text: " ",
    theme: { bgColor: "#FEF4EA", image: "imgs/photo_2024-02-13_11-53-57.jpg" },
  },
  
  
];
let index =  0;

function changeTextWithFadeR() {
  tchange.style.opacity = 0;
  tchange.style.transition = "opacity 1.5s linear";

  setTimeout(() => {
    const { text, theme } = texts[index];
    tchange.textContent = text;

    body.className = theme.classes;
    // Add image (if any)
    body.style.backgroundImage = theme.image ? `url('${theme.image}')` : "none";
    body.style.backgroundSize = "cover";
    // Change page background color with transition
    body.style.transition = "background-color 0.5s ease-in-out";
    body.style.backgroundColor = theme.bgColor;

    tchange.style.opacity = 1;
  }, 500);

  index = (index + 1) % texts.length;
  

  if (index === 1) {
    // Hide play button and audio when index is 1
    myAudio.style.display = "none";
    played.style.display="none";
   
   

  } else {
    // Show play button and audio for other indexes
    myAudio.style.display = "block";
    played.style.display="inline-block";
  }
  if(index===0){
    window.location.href = "main.html";
  }
}
