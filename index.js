const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const calculateButton = document.querySelector("#calculateButton");
const resetButton = document.querySelector("#resetButton");
const myResult = document.querySelector("#myResult");
const myClassification = document.querySelector("#myClassification");

calculateButton.addEventListener("click", () => {
  let height = Math.pow(heightInput.value * 0.01, 2);
  let weight = weightInput.value;
  let bmi = weight / height;

  emptyInputs();
  resultNan();

  function emptyInputs() {
    if (heightInput.value == "" && weightInput.value == "") {
      alert("Please complete both inputs");
      bmi = "";
      myClassification.textContent = `Classification:`;
    } else if (heightInput.value == "") {
      alert("Please complete the height input");
    } else if (weightInput.value == "") {
      alert("Please complete the weight input");
    } else if (heightInput.value != "" && weightInput.value != "") {
      myResult.textContent = `Result: ${Math.round(bmi * 100) / 100}`;
      bmiClassification();
    }
  }

  function bmiClassification() {
    if (bmi < 18.5) {
      myClassification.textContent = `Classification: Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      myClassification.textContent = `Classification: Normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      myClassification.textContent = `Classification: Overweight`;
    } else if (bmi >= 30 && bmi <= 34.9) {
      myClassification.textContent = `Classification: Obesity class 1`;
    } else if (bmi >= 35 && bmi <= 39.9) {
      myClassification.textContent = `Classification: Obesity class 2`;
    } else if (bmi >= 40) {
      myClassification.textContent = `Classification: Obesity class 3`;
    }
  }

  function resultNan() {
    if (isNaN(bmi)) {
      heightInput.value = "";
      weightInput.value = "";
      myResult.textContent = `Result:`;
      alert(" Invalid inputs");
    }
  }
});

resetButton.addEventListener("click", () => {
  heightInput.value = "";
  weightInput.value = "";
  myResult.textContent = `Result:`;
  myClassification.textContent = `Classification:`;
});
