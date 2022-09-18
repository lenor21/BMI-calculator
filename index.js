const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const calculateButton = document.querySelector("#calculateButton");
const resetButton = document.querySelector("#resetButton");
const myResult = document.querySelector("#myResult");

calculateButton.addEventListener("click", () => {
  let height = Math.pow(heightInput.value * 0.01, 2);
  let weight = weightInput.value;
  let bmi = weight / height;

  if (!isNaN(height) && !isNaN(weight)) {
    myResult.textContent = `Result: ${Math.round(bmi * 100) / 100}`;
  } else {
    return;
  }
});
