//Rebuild the module of the previous question, now using JavaScript ES6 classes instead of a module pattern.
class message {
    //1. A method to set a message
    constructor() {
        this.messageText = "Bershka was created in 1998 as a new brand of the Spanish group Inditex";
    }
    //2. A method to get that message
    getMessageText() {
        return this.messageText;
    }
    //3. A method that writes that message in the browser console
    printIntoConsole() {
        console.log(this.messageText);
    }
}
const print = new message;
console.log(print.printIntoConsole());