const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const calculateButton = document.querySelector("#calculateButton");
const resetButton = document.querySelector("#resetButton");
const myResult = document.querySelector("#myResult");
const myClassification = document.querySelector("#myClassification");

calculateButton.style.backgroundColor = "lightgreen";
resetButton.style.backgroundColor = "lightblue";

calculateButton.addEventListener("click", () => {
  let height = Math.pow(heightInput.value * 0.01, 2);
  let weight = weightInput.value;
  let bmi = weight / height;

  emptyInputs();

  function emptyInputs() {
    if (heightInput.value == "" && weightInput.value == "") {
      alert("Please complete both inputs");
      bmi = "";
      myClassification.textContent = "";
    } else if (heightInput.value == "") {
      alert("Please complete the height input");
    } else if (weightInput.value == "") {
      alert("Please complete the weight input");
    } else if (heightInput.value != "" && weightInput.value != "") {
      myResult.textContent = `${Math.round(bmi * 100) / 100}`;
      bmiClassification();
      resultNan();
    }
  }

  function bmiClassification() {
    if (bmi < 18.5) {
      myClassification.textContent = " Underweight";
      myClassification.style.color = "orange";
      myResult.style.color = "orange";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      myClassification.textContent = " Normal weight";
      myClassification.style.color = "green";
      myResult.style.color = "green";
    } else if (bmi >= 25 && bmi <= 29.9) {
      myClassification.textContent = ` Overweight`;
      myClassification.style.color = "orange";
      myResult.style.color = "orange";
    } else if (bmi >= 30 && bmi <= 34.9) {
      myClassification.textContent = ` Obesity class 1`;
      myClassification.style.color = "red";
      myResult.style.color = "red";
    } else if (bmi >= 35 && bmi <= 39.9) {
      myClassification.textContent = ` Obesity class 2`;
      myClassification.style.color = "red";
      myResult.style.color = "red";
    } else if (bmi >= 40) {
      myClassification.textContent = ` Obesity class 3`;
      myClassification.style.color = "red";
      myResult.style.color = "red";
    }
  }

  function resultNan() {
    if (isNaN(bmi)) {
      heightInput.value = "";
      weightInput.value = "";
      myResult.textContent = "";
      alert(" Invalid inputs");
    }
  }
});

resetButton.addEventListener("click", () => {
  heightInput.value = "";
  weightInput.value = "";
  myResult.textContent = "";
  myClassification.textContent = "";
});
