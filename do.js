const inputbox =document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer");
function addtask(){
    if(inputbox.value== ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="/u00d7";
        li.appendChild(span);
    }
    inputbox.value=""
}