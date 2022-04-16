
var divElement = document.getElementById("todo-list");

var inpElement = document.getElementById("inp")

inpElement.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        var todoCard = document.createElement("div")
        todoCard.className = "todo-card"
        var listItem = document.createElement("span")
        var dltButton = document.createElement("button")
        dltButton.innerText = "X"
        listItem.innerText = inpElement.value; 
        todoCard.appendChild(listItem);
        todoCard.appendChild(dltButton)
        divElement.appendChild(todoCard);
        inpElement.value = " "
    }

    
dltButton.addEventListener("click", function(){
    todoCard.remove();
})
})
