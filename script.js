


/* Future functionality 

-Check if the inputs are empty
-Add de quantity of items
-Change the list for a table
-Name a list
-Navegate through lists which will be like tabs
-Store list 
-Put the hour when it was created

*/


var selectButton = document.querySelector("button");


//var selelectCreateListBtn = document.getElementById("createListName");   This var is a test for the moment 18 june 2018



selectButton.addEventListener("click", function(){

    //Values
    
    var itemName = document.getElementById("itemName").value;               // Gets the value of the input element with the "itemName" ID
    var priceInput = document.getElementById("itemPrice").value;            // Gets the value of the input element with the "itemPrice" ID
    var quantityInput = document.getElementById("itemQuantity").value;      // Gets the quantityInput element with the "itemQuantity" ID

    //Creations
    
    var createListItem = document.createElement("li");                      // Creates an item list.
    var convertText= document.createTextNode(itemName + "    ");            // Creates a string or text that we can insert in our item list.
    var createButton = document.createElement("button");                    // Creates a button element.
    var createTextBtn = document.createTextNode("Remove");                  // Creates a string or text that we can insert in our button.
    var checkbox = document.createElement("input");                         // Creates a checkbox
    var priceInputText = document.createTextNode(priceInput + " ");         // Gets the value from priceInput and converts it into a string or text.
    var quantityInputText = document.createTextNode(quantityInput + " ");   // Gets the value from quantityInput and converts it into a string or text.

    //Selections

    var select_UL = document.querySelector("ul");                           // We select the Ul (unordered list) that is created in the index html, so we can insert the list item.
    
    //Change attributes of elements
    
    checkbox.setAttribute("type", "checkbox");                              // Changes the type of the checkbox 
   
    
    // if you didnt put an item name value, price value or quantity of products, a message will pop out, and items will not be created. 

    if (itemName === ""){
        alert("Insert an item, please...");
    }else if(priceInput == ""){
        alert("Insert a price, please...")
    }else if (quantityInput == ""){
        alert("Insert quantity of items, please...")
    }else{
        // Append elements
        
        createButton.appendChild(createTextBtn);                              // Append or insert the textnode in our Button
        createListItem.appendChild(convertText);                              // Append or insert the text node in our list
        createListItem.appendChild(priceInputText);                           // Append or insert the text node of priceInputText into the li
        createListItem.appendChild(quantityInputText);                        // Append or insert the text node of quantityInputText into the li
        createListItem.appendChild(createButton);                             // Append or insert the button in the li
        createListItem.appendChild(checkbox);                                 // Append or insert the checkbox in the li
        select_UL.appendChild(createListItem);                                // Insert or append the the list item inside the Ul that was created in the index file.

        //Reset input values to ""
        itemName = document.getElementById("itemName").value= "";       
        priceInput = document.getElementById("itemPrice").value= "";  
        quantityInput = document.getElementById("itemQuantity").value= "";
        createListItem.style.cssText = "border: black solid 1px; width: 300px; margin-bottom: 2px;"  

    }

    checkbox.addEventListener("click", function(){
        if (checkbox.checked == true){
            createListItem.style.textDecoration = "line-through";
        }else{
            createListItem.style.textDecoration = "none";
        }
    });


    createButton.addEventListener("click", function(){              // It deletes an item from the list
        createListItem.parentNode.removeChild(createListItem);
    });
    

  






});



//This function is a test for the moment. 18 june 2018
/*
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

    var selectMierda = selectMenuList.item(0);

    console.log(selectMierda);
    

});


*/






