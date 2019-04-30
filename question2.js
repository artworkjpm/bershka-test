//Using JavaScript’s Module Pattern, build a self-executing module with 3 public methods as defined below. 
var message = (function() {
    //1. A method to set a message
    var messageText = "Bershka was created in 1998 as a new brand of the Spanish group Inditex";
    return {
        //2. A method to get that message
        getMessageText: function() {
            return messageText;
        },
        //3. A method that writes that message in the browser console
        printIntoConsole: function() {
            console.log(messageText);
        }
    }
})();
message.printIntoConsole();