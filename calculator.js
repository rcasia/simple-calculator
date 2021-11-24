class Calculator {

    lastButtonIsEqual = false;

    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement

        this.clearAll();
    }

    setLastButtonIsEqual(boolean){
        this.lastButtonIsEqual = boolean
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

        if(this.lastButtonIsEqual){
            this.setLastButtonIsEqual(false)
            this.clearAll()
        }

        this.currentOperand = this.currentOperand.toString()+number.toString()

    }

    equal(){
        if(this.currentOperand === "" || this.previousOperand === "") return
        this.compute()
        this.previousOperand = ""
        this.operator = undefined

        this.setLastButtonIsEqual(true)
    }

    chooseComputation(operator){
        this.setLastButtonIsEqual(false)
        if(this.currentOperand == "") return

        this.operator = operator
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