document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;

    if (isNaN(tempInput)) {
        result = "Please enter a valid temperature.";
    } else {
        switch (unit) {
            case "Celsius":
                result = `Fahrenheit: ${(tempInput * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(tempInput + 273.15).toFixed(2)}K`;
                break;
            case "Fahrenheit":
                result = `Celsius: ${(tempInput - 32 * 5/9).toFixed(2)}°C, Kelvin; ${((tempInput - 32) * 5/9 + 273.15).toFixed(2)}k`;
                break;
            case "Kelvin":
                result = `Celsius: ${(tempInput - 273.15).toFixed(2)}°C, Fahrenheit; ${(tempInput - 273.15 * 9/5 + 32).toFixed(2)}°F`;
                break;
        }
    }

    document.getElementById('resultDisplay').textContent = result;
});