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
    var pup_temp = []; 
    var temp_cost; 
    var temp_amt; 
    var item_count = 0; 
    var total_cost = 0; 

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
            output.comments = responses[j].getResponse(); 
        }

        else if (responses[j].getItem().getType() == FormApp.ItemType.MULTIPLE_CHOICE) {
            output.pickup = responses[j].getResponse(); 
            pup_temp = output.pickup.split(' '); 
            if ((pup_temp[0] == "Home" || pup_temp[0] == "home") && (pup_temp[1] == "delivery" || pup_temp[1] == "Delivery")){
                output.delivery = 1; 
            }
            else {
                output.delivery = 0; 
            }
        }
    }

    /* calculate number of items */
    for (i = 0; i < amount.length; i++) {
        item_count = item_count + amount[i]; 
    }

    /* calculate total cost */ 
    for (i = 0; i < cost.length; i++) {
        total_cost = total_cost + cost[i]; 
    }
    if ((item_count < 5) && output.delivery == 1) {
        total_cost = total_cost + 10; 
    }


    output.amount = amount; 
    output.food = food; 
    output.cost = cost;
    Logger.log(output.comments); 
 
}
