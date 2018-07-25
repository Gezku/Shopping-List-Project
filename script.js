
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

var tableData = [];                                                            //Experiment 23/June/2018

selectButton.addEventListener("click", function(){

    //General Variables

    var newDate = new Date();                                               
    var shortDate = newDate.toLocaleDateString();                                     

    //Values
    
    var itemName = document.getElementById("itemName").value;               // Gets the value of the input element with the "itemName" ID
    var priceInput = document.getElementById("itemPrice").value;            // Gets the value of the input element with the "itemPrice" ID
    var quantityInput = document.getElementById("itemQuantity").value;      // Gets the quantityInput element with the "itemQuantity" ID




    //Creations
    
    var convertText= document.createTextNode(itemName);            // Creates a string or text that we can insert in our item list.
    var createButton = document.createElement("button");                    // Creates a button element.
    var createTextBtn = document.createTextNode("Remove");                  // Creates a string or text that we can insert in our button.
    var checkbox = document.createElement("input");                         // Creates a checkbox
    var priceInputText = document.createTextNode(priceInput + " ");         // Gets the value from priceInput and converts it into a string or text.
    var quantityInputText = document.createTextNode(quantityInput + " ");   // Gets the value from quantityInput and converts it into a string or text.
    var spanDateTextNode = document.createTextNode(shortDate);              // EXPERIMENT




    //Item Values to JSON                                                                      


    var tableRow = new Object();   
    tableRow.firstTd = itemName;
    tableRow.secondTd = priceInput;
    tableRow.thirdTd = quantityInput;


    tableData.push(tableRow);
    
    console.log(tableData);                                                        //Experiment 23/June/2018

    

    


    //Table experimentation creations

    /* var tditemName  = document.createElement("td").innerHTML = convertText; */
    var tditemName  = document.createElement("td");
    var tdPrice = document.createElement("td");
    var tdQuantity = document.createElement("td");
    var tdRemoveButton = document.createElement("td");
    var tdCheckBox = document.createElement("td");
    var tdDate = document.createElement("td");
    var trAll = document.createElement("tr");

    // Table experimentation selection

    var selectTable = document.getElementById("table");

    // Table experimentation appending
    
    // Select the table  
    
    
    
    if (itemName === ""){
        alert("Insert a name, please");
    }else if(priceInput == ""){
        alert("Insert a price, please...")
    }else if (quantityInput == ""){
        alert("Insert quantity of items, please...")
    }else{
        selectTable.appendChild(trAll);
        // Appending Text Node to td elements
        tditemName.appendChild(convertText);
        tdPrice.appendChild(priceInputText);
        tdQuantity.appendChild(quantityInputText);
        tdDate.appendChild(spanDateTextNode);
    
        createButton.appendChild(createTextBtn);
        tdRemoveButton.appendChild(createButton);
    
        checkbox.setAttribute("type", "checkbox"); 
        tdCheckBox.appendChild(checkbox);
        
    
        //Appending td elements to tr elements
        trAll.appendChild(tditemName);
        trAll.appendChild(tdPrice);
        trAll.appendChild(tdQuantity);
        trAll.appendChild(tdDate);
        trAll.appendChild(tdRemoveButton);
        trAll.appendChild(checkbox);

         //Reset input values to ""
        itemName = document.getElementById("itemName").value= "";       
        priceInput = document.getElementById("itemPrice").value= "";  
        quantityInput = document.getElementById("itemQuantity").value= "";   
    }
    
    
    storeData(tableData); 
   

    createButton.addEventListener("click", function(){                           
        trAll.parentNode.removeChild(trAll);
    });




    var tableRowColor = getComputedStyle(trAll).backgroundColor;


    checkbox.addEventListener("click", function(){                              
        if (checkbox.checked == true){
            if (tableRowColor == "rgb(221, 221, 221)" || tableRowColor == "rgba(0, 0, 0, 0)")
                    trAll.style.backgroundColor = "red";
        }else{
            trAll.style.backgroundColor = tableRowColor;
        }
    });





   function storeData(array){
    localStorage.setItem("tableData", JSON.stringify(array));
   }

});


