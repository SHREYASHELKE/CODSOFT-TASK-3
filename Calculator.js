let expression = "";

function press(value) {
    expression += value;
    document.getElementById("display").innerText = expression;
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").innerText = "0";
}

function calculate() {
    try {
        expression = eval(expression).toString();
        document.getElementById("display").innerText = expression;
    } catch {
        document.getElementById("display").innerText = "Error";
        expression = "";
    }
}
