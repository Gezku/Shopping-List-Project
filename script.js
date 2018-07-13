

var selectButton = document.querySelector("button");

selectButton.addEventListener("click", function(){
    
    var itemName = document.getElementById("itemName").value;       // Gets the value of the input element with the "itemName" ID
    var createListItem = document.createElement("li");              // Creates an item list.
    var convertText= document.createTextNode(itemName + "    ");    // Creates a string or text that we can insert in our item list.
    var createButton = document.createElement("button");            // Creates a button element.
    var createTextBtn = document.createTextNode("Remove");          // Creates a string or text that we can insert in our button.
    var select_UL = document.querySelector("ul");                   // We select the Ul (unordered list) that is created in the index html, so we can insert the list item.

    /*
    EXPERIMENT

    I'm trying to put a checkbox inside the item list,so when I click it and check it, the text-decoration of the text changes to line-through.

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    */


    createButton.appendChild(createTextBtn);                        // Append or insert the textnode in our Button
    createListItem.appendChild(convertText);                        // Append or insert the text node in our list
    createListItem.appendChild(createButton);                       // Append or insert the button in the list item
    
    select_UL.appendChild(createListItem);                          // Insert or append the the list item inside the Ul that was created in the index file.

    itemName = document.getElementById("itemName").value= "";       // Remove the value of the input, so we can insert another item list.

    createButton.addEventListener("click", function(){              // It deletes an item from the list
        createListItem.parentNode.removeChild(createListItem);
    });
    



});