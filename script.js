


/* Future functionality 


-Add de quantity of items
-Change the list for a table
-Name a list
-Navegate through lists which will be like tabs
-Store list 
-Put the hour when it was created




*/








var selectButton = document.querySelector("button");

selectButton.addEventListener("click", function(){
    
    var itemName = document.getElementById("itemName").value;       // Gets the value of the input element with the "itemName" ID
    
    var createListItem = document.createElement("li");              // Creates an item list.
    var convertText= document.createTextNode(itemName + "    ");    // Creates a string or text that we can insert in our item list.
    
    var createButton = document.createElement("button");            // Creates a button element.
    var createTextBtn = document.createTextNode("Remove");          // Creates a string or text that we can insert in our button.
    
    var select_UL = document.querySelector("ul");                   // We select the Ul (unordered list) that is created in the index html, so we can insert the list item.
    
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    
    var priceInput = document.getElementById("itemPrice").value;
    var priceInputText = document.createTextNode(priceInput + " ");
    
    var quantityInput = document.getElementById("itemQuantity").value;
    var quantityInputText = document.createTextNode(quantityInput + " ");

   


    /*
    EXPERIMENT

    I'm trying to put a checkbox inside the item list,so when I click it and check it, the text-decoration of the text changes to line-through.

    
    checkbox.setAttribute("type", "checkbox");
    */

    createButton.appendChild(createTextBtn);                        // Append or insert the textnode in our Button
    createListItem.appendChild(convertText);                        // Append or insert the text node in our list
    createListItem.appendChild(priceInputText);
    createListItem.appendChild(quantityInputText);
    createListItem.appendChild(createButton);                       // Append or insert the button in the list item
    
    createListItem.appendChild(checkbox);
    select_UL.appendChild(createListItem);                          // Insert or append the the list item inside the Ul that was created in the index file.

    itemName = document.getElementById("itemName").value= "";       // Remove the value of the input, so we can insert another item list.
    priceInput = document.getElementById("itemPrice").value= "";  
    quantityInput = document.getElementById("itemQuantity").value= "";  

    checkbox.addEventListener("click", function(){
        if (checkbox.checked == true){
            createListItem.style.textDecoration = "line-through";
            console.log("Verdadero");
        }else{
            createListItem.style.textDecoration = "none";
            console.log("Falso");
        }
    });


    createButton.addEventListener("click", function(){              // It deletes an item from the list
        createListItem.parentNode.removeChild(createListItem);
    });
    



});