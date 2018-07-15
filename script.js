


/* Future functionality 


-Add de quantity of items
-Change the list for a table
-Name a list
-Navegate through lists which will be like tabs
-Store list 
-Put the hour when it was created




*/








var selectButton = document.querySelector("button");
var selelectCreateListBtn = document.getElementById("createListName");

/*
var selectli = document.getElementById("lista-uno");
var selectli2= document.getElementById("lista-2");
Experiment
*/






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



selelectCreateListBtn.addEventListener("click",function(){
    var newH2 = document.createElement("h2");
    var newLi = document.createElement("li");
    var newA = document.createElement("a");
    var selectMenuList = document.getElementById("menu-list");
    var inputListNameValue = document.getElementById("listName").value;
    var convertListNameValue = document.createTextNode(inputListNameValue);
     
    newA.setAttribute("href", "#");
    newA.setAttribute("class", "list-1");
    newA.appendChild(convertListNameValue);
    newH2.appendChild(newA);
    newLi.appendChild(newH2);
    
    
    
    selectMenuList.appendChild(newLi);
    newLi.style.cssFloat = "left";
    

});









