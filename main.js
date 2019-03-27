function main() {
    var menuform = FormApp.openById('1A3a2zD6GvE2PUE4kRUqDZODzSKnxQaMaEUvzgASDSbY'); 
    var allitems = menuform.getResponses();  
    var i, j; 
    var len = allitems.length; 
    var responses = allitems[len - 1].getItemResponses(); 
    var output = new data(); 
    var amount = []; 
    var food = []; 

    for (j = 0; j < responses.length; j++) {
        if (responses[j].getItem().getType() == FormApp.ItemType.TEXT) {
            if (j == 0) {
                output.name = responses[j].getResponse(); 
                
            }
            else {
                amount.push(responses[j].getResponse());
                food.push(responses[j].getItem().getTitle()); 
            }
        }

        else if (responses[j].getItem().getType() == FormApp.ItemType.PARAGRAPH_TEXT) {

        }

        else if (responses[j].getItem().getType() == FormApp.ItemType.MULTIPLE_CHOICE) {

        }
    }
    output.amount = amount; 
    output.food = food; 
    Logger.log(output); 
 
}
