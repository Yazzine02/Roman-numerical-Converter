const numberInput = document.getElementById("input");
const convertButton = document.getElementById("convert");
const output = document.getElementById("result");

const romanNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanLetters = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function convertToRoman(number) {
  if (number === 0) {
    output.textContent = "Roman numerals do not represent zero.";
    return;
  }

  if (isNaN(number) || number < 1 || number > 3999) {
    const errorMessage = number < 1 ? "Please enter a number greater than or equal to 1." :
      number > 3999 ? "Please enter a number less than or equal to 3999." :
      "Please enter a valid number.";
    output.textContent = errorMessage;
    return;
  }

  let roman = "";
  for (let i = 0; i < romanNumbers.length; i++) {
    while (number >= romanNumbers[i]) {
      roman += romanLetters[i];
      number -= romanNumbers[i];
    }
  }
  output.textContent = roman;
  output.parentElement.style.visibility = "visible";
}

convertButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission (optional)
  const enteredNumber = parseInt(numberInput.value);
  convertToRoman(enteredNumber);
  // Clear previous output on new conversion (optional):
  // output.textContent = ""; // Uncomment if you prefer to clear the output
});