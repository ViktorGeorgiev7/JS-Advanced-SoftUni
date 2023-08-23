function subtract() {
    let n1 = document.querySelector("#firstNumber");
    let n2 = document.querySelector("#secondNumber");
    let result = document.querySelector("#result");
    result.textContent = Number(n1.value) - Number(n2.value)
}