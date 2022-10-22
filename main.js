// All global variables

const numbers = document.querySelectorAll(".number"),
  operator = document.querySelectorAll(".operator"),
  equal = document.querySelector(".equals"),
  previousNumber = document.querySelector(".previousNumber"),
  currentNumber = document.querySelector(".currentNumber"),
  clear = document.querySelector(".clear"),
  del = document.querySelector(".del"),
  mathSign = document.querySelector(".mathSign");

let result = "";

//Display numbers

function addNumber() {
  if (this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
  if (
    currentNumber.innerHTML.startsWith("0") ||
    currentNumber.innerHTML.charAt(0) === "0"
  ) {
    currentNumber.innerHTML = currentNumber.innerHTML
      .replace("0", this.textContent)
      .substring(0, currentNumber.innerHTML.length);
  } else if (currentNumber.innerHTML === "0" && this.textContent === ".") {
    currentNumber.innerHTML === "0.";
  } else if (currentNumber.innerHTML == result) {
    currentNumber.innerHTML = currentNumber.innerHTML.replace(
      result,
      this.textContent
    );
  }
  currentNumber.classList.remove("divide");
  currentNumber.innerHTML += this.textContent;
}

// Operates on numbers

function operate() {
  if (currentNumber.innerHTML === "0" && this.textContent === "-") {
    currentNumber.innerHTML = "-";
    return;
  } else if (currentNumber.innerHTML === "") {
    return;
  }

  if (mathSign.innerHTML === "") {
    showResult();
  }

  currentNumber.innerHTML += this.textContent;
  previousNumber.textContent = currentNumber.innerHTML;
  mathSign.textContent = this.textContent;
  currentNumber.innerHTML = "";
}

// Showing result

function showResult() {
  if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") return;
  let operator = mathSign.innerHTML;
  let a = parseFloat(currentNumber.innerHTML);
  let b = parseFloat(previousNumber.innerHTML);

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
      divitionZero();
      break;
  }

  currentNumber.innerHTML = result;
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";
}

// Codition for dividing by 0

function divitionZero() {
  let a = parseFloat(currentNumber.innerHTML);
  let b = parseFloat(previousNumber.innerHTML);
  if (a == 0 && a == -0) {
    result = "Don't divide by 0!";
    currentNumber.innerHTML = result;
    currentNumber.classList.toggle("divide");
  }
}

// Clear everything button

function clearEverything() {
  currentNumber.innerHTML = "0";
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";

  currentNumber.classList.remove("divide");
}

// Clear only one sign

function clearOne() {
  currentNumber.innerHTML = currentNumber.innerHTML.substring(
    0,
    currentNumber.innerHTML.length - 1
  );
}

// Event Listeners

numbers.forEach(btn => {
  btn.addEventListener("click", addNumber);
});

operator.forEach(e => {
  e.addEventListener("click", operate);
});

equal.addEventListener("click", showResult);

clear.addEventListener("click", clearEverything);

del.addEventListener("click", clearOne);
