function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    try {
        var expression = document.getElementById("result").value;
        var result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function calculateSquareRoot() {
    try {
        var expression = document.getElementById("result").value;
        var result = Math.sqrt(eval(expression));
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function calculateFactorial() {
    try {
        var expression = document.getElementById("result").value;
        var num = parseInt(expression);
        var result = 1;
        if (num < 0) {
            throw "Factorial is not defined for negative numbers";
        }
        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function backspace() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}
