const numbers = document.querySelectorAll(".number"),
  operator = document.querySelectorAll(".operator"),
  equal = document.querySelector(".equals"),
  previousNumber = document.querySelector(".previousNumber"),
  currentNumber = document.querySelector(".currentNumber"),
  clear = document.querySelector(".clear"),
  del = document.querySelector(".del"),
  mathSign = document.querySelector(".mathSign"),
  pow = document.querySelector(".pow");

let result = "";

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

  if (mathSign.innerHTML !== "") {
    showResult();
  }

  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML += this.textContent;
  currentNumber.innerHTML = "";
}

function showResult() {
  if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") return;
  let a = Number(currentNumber.innerHTML);
  let b = Number(previousNumber.innerHTML);
  let operator = mathSign.innerHTML;

  switch (operator) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = b - a;
      break;

    case "×":
      result = a * b;
      break;

    case "÷":
      result = b / a;
      break;
  }

  currentNumber.innerHTML = result;
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";
}

function clearEverything() {
  currentNumber.innerHTML = "";
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";
}

numbers.forEach(btn => {
  btn.addEventListener("click", addNumber);
});

operator.forEach(e => {
  e.addEventListener("click", operate);
});

equal.addEventListener("click", showResult);

clear.addEventListener("click", clearEverything);
