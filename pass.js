const input = document.getElementById("inpt");
const button = document.getElementById("btn");

function check() {
  if (input.value === "1230") {
    alert("تقدیم به بیب بیب خوشگلم");
    window.location.href = "main.html";
  } else {
    alert("دوباره سعی کن جیگر من");
  }
}

