function main() {
    var menuform = FormApp.openById('1A3a2zD6GvE2PUE4kRUqDZODzSKnxQaMaEUvzgASDSbY'); 
    var allitems = menuform.getResponses();  
    var i, j; 

    /* only get the most recent response */ 
    var responses = allitems[allitems.length - 1].getItemResponses(); 
    var output = new data(); 
    var amount = []; 
    var food = []; 
    var cost = []; 
    var temp_cost; 
    var temp_amt; 

    for (j = 0; j < responses.length; j++) {
        if (responses[j].getItem().getType() == FormApp.ItemType.TEXT) {
            if (j == 0) {
                output.name = responses[j].getResponse(); 
                
            }
            else {
                temp_amt = responses[j].getResponse(); 
                amount.push(temp_amt);
                food.push(responses[j].getItem().getTitle());
                /* some nonsense to grab the cost */
                temp_cost = responses[j].getItem().getHelpText().split('$')[1].split(' ')[0]
                cost.push(temp_amt * temp_cost); 
            }
        }

        else if (responses[j].getItem().getType() == FormApp.ItemType.PARAGRAPH_TEXT) {

        }

        else if (responses[j].getItem().getType() == FormApp.ItemType.MULTIPLE_CHOICE) {

        }
    }
    output.amount = amount; 
    output.food = food; 
    output.cost = cost; 
    Logger.log(output); 
 
}
