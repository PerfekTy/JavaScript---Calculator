const numbers = document.querySelectorAll(".number-btn"),
  operator = document.querySelectorAll(".operator"),
  equal = document.querySelector(".equals"),
  previousNumber = document.querySelector(".previousNumber"),
  currentNumber = document.querySelector(".currentNumber"),
  clear = document.querySelector(".clear"),
  del = document.querySelector(".del"),
  mathSign = document.querySelector(".mathSign");

let value = "";

function addNumber() {
  if (this.textContent === "," && currentNumber.innerHTML.includes(",")) return;
  if (this.textContent === "," && currentNumber.innerHTML.includes(""))
    return (currentNumber.innerHTML = "0,");
  currentNumber.innerHTML += this.textContent;
}

function operate() {
  if (currentNumber.innerHTML === "" && this.textContent === "-") {
    currentNumber.innerHTML = "-";
    return;
  } else if (currentNumber.innerHTML === "") {
    return;
  }
  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = "";
}

numbers.forEach(btn => {
  btn.addEventListener("click", addNumber);
});

operator.forEach(e => {
  e.addEventListener("click", operate);
});
