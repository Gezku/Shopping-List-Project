
/* Future functionality 

-Check if the inputs are empty
-Add de quantity of items
-Change the list for a table
-Name a list
-Navegate through lists which will be like tabs
-Store list 
-Put the hour when it was created

*/

/* 
Errors for now,

-when values are inserted, it stores "" "" "" values, but it doesnt show them at first when the add button is pressed.  
-When a checkbox is checked it becomes red, but when the page is refreshed the colors go back to its natural color.
*/



var addBtn = document.querySelector("button");                                          // Select the add button which is the main button of the whole application.

var tableData  = JSON.parse(localStorage.getItem('tableData')) || [];                   // It gets the data from the tableData key in the localstorage. It prevents also the array being reseted
                                                                                        // or not geting a value

getData();                                                                              // It gets all the data with this function.

var data0;
var data1;
var data2;
var data3;
var data4;

 
function getData(){
    for(var i = 0; i < tableData.length; i++ ){
        data0 = JSON.parse(localStorage.getItem("tableData"))[i].id;                    
        data1 = JSON.parse(localStorage.getItem("tableData"))[i].firstTd;
        data2 = JSON.parse(localStorage.getItem("tableData"))[i].secondTd;
        data3 = JSON.parse(localStorage.getItem("tableData"))[i].thirdTd;
        data4 = JSON.parse(localStorage.getItem("tableData"))[i].fourthTd;
        constructData(); 
    
    }
      
}


function constructData(){
    
    var selectingTable = document.getElementById("table");
    var createtableRow = createElement("tr");     
    var createButton2 = createElement("button");
    var idconstructtd = createElement("td"); 
    var nameTd = createElement("td");
    var priceTd = createElement("td");
    var quantityTd = createElement("td");
    var dateTd = createElement("td");
    var removeBtnTd = createElement("td");
    var tdCheckBox2 = createElement("td");
    var checkbox2 = createElement("input");
    var idconstructTextNode = document.createTextNode(data0);
    var createString = document.createTextNode(data1);
    var priceTxtNode = document.createTextNode(data2);
    var quantityTxtNode = document.createTextNode(data3);
    var DateTextNode = document.createTextNode(data4);
    var removeBtnTextNode =document.createTextNode("Remove");
   

    // Changing the input attribute to checkbox

    checkbox2.setAttribute("type", "checkbox"); 
    tdCheckBox2.appendChild(checkbox2);
        
    

    
    idconstructtd.appendChild(idconstructTextNode);
    nameTd.appendChild(createString);
    priceTd.appendChild(priceTxtNode);
    quantityTd.appendChild(quantityTxtNode);
    dateTd.appendChild(DateTextNode);
    createButton2.appendChild(removeBtnTextNode);
    removeBtnTd.appendChild(createButton2);    

    selectingTable.appendChild(createtableRow);
    createtableRow.appendChild(idconstructtd);
    createtableRow.appendChild(nameTd);
    createtableRow.appendChild(priceTd);
    createtableRow.appendChild(quantityTd);
    createtableRow.appendChild(dateTd);
    createtableRow.appendChild(removeBtnTd);
    createtableRow.appendChild(tdCheckBox2);
 
    createButton2.addEventListener("click", function(){   

        var valueTd1 = removeBtnTd.parentNode.childNodes[0];                                   // ParentNode (td) of RemoveBtnTd in position 0 which is the id of the row.
        var valueTd1TextContent = valueTd1.textContent;                                        // We get the textContent of the td in position 0. 
  
        for (var j = 0; j < tableData.length; j++ ){                                                    
            idValueIteration = JSON.parse(localStorage.getItem("tableData"))[j].id;           // We iterate through the tableData values
            if( idValueIteration == valueTd1TextContent){                                     // If the idValueIteration is equal to valueTd1TextContent then...
                tableData.splice(j,1);                                                        // It delete this object from the array tableData
                localStorage.setItem("tableData", JSON.stringify(tableData));                 // It updates the localStorage with the tableData key.
                createtableRow.parentNode.removeChild(createtableRow);                        // It removes the the tableRow which we can see in the UI or we can see when it gets removed visually
                break;                                                                        // It breaks the for loop.
                
            }
        }

     
    });

    var tableRowColor2 = getComputedStyle(createtableRow).backgroundColor;

    checkbox2.addEventListener("click", function(){
        if (checkbox2.checked == true){
            createtableRow.style.backgroundColor = "red";
        }else{
            createtableRow.style.backgroundColor = tableRowColor2;
        }
    })
    
 };




 addBtn.addEventListener("click", function(){
  

    var newDate = new Date();                                               
    var shortDate = newDate.toLocaleDateString();
                                      

    //Values
    
    var itemNameInput = document.getElementById("itemName").value;               // Gets the value of the input element with the "itemName" ID
    var priceInput = document.getElementById("itemPrice").value;            // Gets the value of the input element with the "itemPrice" ID
    var quantityInput = document.getElementById("itemQuantity").value;      // Gets the quantityInput element with the "itemQuantity" ID


    //Creations
    
    var convertText= document.createTextNode(itemNameInput);            // Creates a string or text that we can insert in our item list.
    var createButton = document.createElement("button");                    // Creates a button element.
    var createTextBtn = document.createTextNode("Remove");                  // Creates a string or text that we can insert in our button.
    var checkbox = document.createElement("input");                         // Creates a checkbox
    var priceInputText = document.createTextNode(priceInput);         // Gets the value from priceInput and converts it into a string or text.
    var quantityInputText = document.createTextNode(quantityInput);   // Gets the value from quantityInput and converts it into a string or text.
    var shortDateTextNode = document.createTextNode(shortDate);              // EXPERIMENT
  

    
     //Item Values to JSON                                                                      
      
     var tableRow = new Object();
     tableRow.id =  tableData.length + 1;
     tableRow.firstTd = itemNameInput;
     tableRow.secondTd = priceInput;
     tableRow.thirdTd = quantityInput;
     tableRow.fourthTd= shortDate;
     tableRow.fifthTd = false;
    

     
   
    //console.log(typeof(createTextBtn));

                                                          //Experiment 23/June/2018

  

    //Table experimentation creations

    /* var tditemName  = document.createElement("td").innerHTML = convertText; */
    
    
    var tdid = createElement("td");
    var idTdTextNode = document.createTextNode(tableRow.id);

    var tditemName  = createElement("td");
    var tdPrice = createElement("td");
    var tdQuantity = createElement("td");
    var tdRemoveButton = createElement("td");
    var tdCheckBox = createElement("td");
    var tdDate = createElement("td");
    var trAll = createElement("tr");

    // Table experimentation selection

    var selectTable = document.getElementById("table");

    // Table experimentation appending
    
    // Select the table  
    
    
   
    if (itemNameInput === ""){
        alert("Insert a name, please");
    }else if(priceInput == ""){
        alert("Insert a price, please...")
    }else if (quantityInput == ""){
        alert("Insert quantity of items, please...")
    }else{
        selectTable.appendChild(trAll);
        // Appending Text Node to td elements
        tdid.appendChild(idTdTextNode);
        tditemName.appendChild(convertText);
        tdPrice.appendChild(priceInputText);
        tdQuantity.appendChild(quantityInputText);
        tdDate.appendChild(shortDateTextNode);
    
        createButton.appendChild(createTextBtn);
        tdRemoveButton.appendChild(createButton);
    
        checkbox.setAttribute("type", "checkbox"); 
        tdCheckBox.appendChild(checkbox);
        
        // Experiment ----------------------------------------------31 Julio 2018
        

        //Appending td elements to tr elements
        trAll.appendChild(tdid);                                            //Adds the ID td to the row of the table element.
        trAll.appendChild(tditemName);                                      //Adds the itemName td to the row of the table element.
        trAll.appendChild(tdPrice);                                         //Adds the tdPrice td to the row of the table element.
        trAll.appendChild(tdQuantity);                                      //Adds the tdQuantity td to the row of the table element.
        trAll.appendChild(tdDate);                                          //Adds the tdDate td to the row of the table element.
        trAll.appendChild(tdRemoveButton);                                  //Adds the tdRemoveButton td to the row of the table element.
        trAll.appendChild(checkbox);                                        //Adds the checkbox td to the row of the table element.

         //Reset input values to ""
        itemNameInput = document.getElementById("itemName").value= "";       
        priceInput = document.getElementById("itemPrice").value= "";  
        quantityInput = document.getElementById("itemQuantity").value= "";   
    }
    
   


    var tableRowColor = getComputedStyle(trAll).backgroundColor;
    
  


   


    createButton.addEventListener("click", function(){                           
       
        
        var btn2Value1 = tdRemoveButton.parentNode.childNodes[0];
        var idValue = btn2Value1.textContent;
         
        console.log(btn2Value1.textContent);

        for(var p = 0; p < tableData.length; p++){
            var valor1 = JSON.parse(localStorage.getItem("tableData"))[p].id;
            if(valor1  == idValue){
                tableData.splice(p,1);
                trAll.parentNode.removeChild(trAll);
                localStorage.setItem("tableData", JSON.stringify(tableData));
               
            }
        }

        
         
     }); 


    checkbox.addEventListener("click", function(){
        
        if (checkbox.checked == true){
            if (tableRowColor == "rgb(221, 221, 221)" || tableRowColor == "rgba(0, 0, 0, 0)"){
                trAll.style.backgroundColor = "red";    
            }
            tableRow.fifthTd = true;                                                                            //After the condition is true, it changes the value of tableRow.fifthTd ->
            storeData(tableData);                                                                               //The tablerow is update and it stores of the object into the array TableData
        }else{
            trAll.style.backgroundColor = tableRowColor; 
            tableRow.fifthTd = false;
            storeData(tableData); 
    
            
            
        }
        
        
    });

    
    
     
    
    tableData.push(tableRow);
    storeData(tableData); 

 

    function storeData(array){
        
        localStorage.setItem("tableData", JSON.stringify(array));
    }
   
   
});


function createElement(nombre){                                                        // Instead of making a td everytime, this function will reduce the amount of code;
    let newTd  = document.createElement(nombre);
    return newTd;
}

