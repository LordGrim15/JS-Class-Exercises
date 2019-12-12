let inputNumber = prompt(
  "Type 1 if you want to convert Celsius in Fahrenheit, if otherwise type 2:"
);
let chosenNumber = parseInt(inputNumber);
switch (chosenNumber) {
  case 1:
    let inputCelsius = prompt(
      "Please enter the amount of Celsius you want to convert: "
    );
    let celsius = parseInt(inputCelsius);
    function celsiusConverter() {
      let result = celsius * 1.8 + 32;
      return result;
    }

    console.log(
      `${celsius} Celsius in Fahrenheit is: ${celsiusConverter()} Fahrenheit.`
    );

    break;
  case 2:
    let inputFahrenheit = prompt(
      "Please enter the amount of Fahrenheit you want to convert: "
    );
    let fahrenheit = parseInt(inputFahrenheit);
    function fahrenheitConverter() {
      let result = (5 / 9) * (fahrenheit - 32);
      return result;
    }
    console.log(
      `${fahrenheit} Fahrenheit in Celsius is: ${fahrenheitConverter()} Celsius.`
    );
    break;
  default:
    console.log("Invalid entry! Please use only 1 and 2!");
    break;
}
