

var selectButton = document.querySelector("button");

selectButton.addEventListener("click", function(){
    
    var itemName = document.getElementById("itemName").value;
    var createListItem = document.createElement("li");
    var convertText= document.createTextNode(itemName);
  

    var select_UL = document.querySelector("ul");

    createListItem.appendChild(convertText);
    select_UL.appendChild(createListItem);

    itemName = document.getElementById("itemName").value= "";

 


});