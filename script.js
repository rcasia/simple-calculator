class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement

        this.clearAll();
    }

    clearAll(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operator = undefined
        this.updateDisplay()
    }

    deleteOne(){
        this.currentOperand = this.currentOperand.slice(0, -1)
  
    }

    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString()+number.toString()

    }

    equal(){
        if(this.currentOperand === "" || this.previousOperand === "") return
        this.compute()
        this.previousOperand = ""
        this.operator = undefined

    }

    chooseComputation(operator){
        
        this.operator = operator
        
        if(this.currentOperand === "") return
        if(this.previousOperand !== ""){
            this.compute()
        }

        this.operator = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    compute(){

        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)

        let computation;

        switch (this.operator) {
            case "+":
                computation = prev + curr; break;
            
            case "-":
                computation = prev - curr; break;
            
            case "*":
                computation = prev * curr; break;
            
            case "÷":
                computation = prev / curr; break;
            
            default: break;
            
        }

        this.currentOperand = computation.toString()

    }

    updateDisplay(){
        this.currentOperandTextElement.innerHTML = this.currentOperand
        if(this.operator !== undefined){
            this.previousOperandTextElement.innerHTML = `${this.previousOperand} ${this.operator}`

        } else {
            this.previousOperandTextElement.innerHTML = ""
        }

    }

}

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

