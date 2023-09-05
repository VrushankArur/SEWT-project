let select =  document.getElementById("select");
let list =  document.getElementById("list");
let selectText =  document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let inputfield = document.getElementById("inputfield");

select.onclick = function(){
    list.classList.toggle("open");
}

for(option of options)
    option.onclick = function(){
    selectText.innerHTML = this.innerHTML;
    inputfield.placeholder = "Search In " + selectText.innerHTML; 
}
        
