function main() {
  var menuform = FormApp.openById('1A3a2zD6GvE2PUE4kRUqDZODzSKnxQaMaEUvzgASDSbY'); 
  var allitems = menuform.getResponses();  
  var i, j; 
  
  for(i = 0 ; i<allitems.length; i++){
    for(j = 0; j<allitems[i].getItemResponses(); j++){
       var responses = allitems[i].getItemResponses(); 
        /* text answers are for name and for order amounts */ 
        if (responses[j].getItem().getType() == FormApp.ItemType.TEXT) {
        
      }
        /* paragraph answers are for comments */ 
        else if (responses[j].getItem().getType() == FormApp.ItemType.PARAGRAPH_TEXT) {

      }
         /*multiple choice is for drop off location*/ 
        else if (responses[j].getItem().getType() == FormApp.ItemType.MULTIPLE_CHOICE) {

        }
    }
  }
  
 
}
