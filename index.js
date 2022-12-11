const result = document.getElementById("content");
const submitBtn = document.getElementById("submit");

let myAsyncFunction = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  result.textContent = data.slip.advice
  return data; 
 };



 submitBtn.addEventListener("click",  myAsyncFunction)