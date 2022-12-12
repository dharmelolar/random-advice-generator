const result = document.getElementById("content");
const submitBtn = document.getElementById("submit");
const API = "https://api.adviceslip.com/advice";

function generateAdvice() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
        result.textContent = data.slip.advice
    });
}

submitBtn.addEventListener("click",  generateAdvice)