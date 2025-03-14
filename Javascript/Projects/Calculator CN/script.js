let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('result').value = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('result').value = displayValue;
    }
}
