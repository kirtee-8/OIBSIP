function convertTemp() {

    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");
    let error = document.getElementById("error");

    result.innerHTML = "";
    error.innerHTML = "";

    if (isNaN(temp)) {
        error.innerHTML = "Please enter a valid number.";
        return;
    }

    // Absolute zero validation
    if ((unit === "c" && temp < -273.15) ||
        (unit === "f" && temp < -459.67) ||
        (unit === "k" && temp < 0)) {
        error.innerHTML = "Temperature cannot be below absolute zero.";
        return;
    }

    let c, f, k;

    if (unit === "c") {
        c = temp;
        f = (temp * 9/5) + 32;
        k = temp + 273.15;
    }
    else if (unit === "f") {
        c = (temp - 32) * 5/9;
        f = temp;
        k = c + 273.15;
    }
    else {
        c = temp - 273.15;
        f = (c * 9/5) + 32;
        k = temp;
    }

    result.innerHTML = `
        <p>Celsius: ${c.toFixed(2)} °C</p>
        <p>Fahrenheit: ${f.toFixed(2)} °F</p>
        <p>Kelvin: ${k.toFixed(2)} K</p>
    `;
}