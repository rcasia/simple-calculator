const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")
const numberButtons = document.querySelectorAll("[data-number]")
const operatorButtons = document.querySelectorAll("[data-operator]")
const deleteButton = document.querySelector("[data-delete]")
const clearAllButton = document.querySelector("[data-clear-all]")
const equalsButton = document.querySelector("[data-equals]")


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button =>{
    button.addEventListener('click', event =>{
        calculator.appendNumber(button.innerHTML);
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", event => {
        calculator.chooseComputation(button.innerHTML)
        calculator.updateDisplay()
    })
})

deleteButton.addEventListener("click", event => {
    calculator.deleteOne();
    calculator.updateDisplay()
})

clearAllButton.addEventListener("click", event => {
    calculator.clearAll()
    calculator.updateDisplay()
})

equalsButton.addEventListener("click", event => {
    calculator.equal()
    calculator.updateDisplay()
})

