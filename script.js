const flag = true;
const menuButton = document.getElementById("toggle");
const menu = document.getElementById("menu"); 
const dropdown = () =>{
    if (flag === true){
        menu.getAttribute("display") = "none";
    }
    else
        menu.getAttribute("display") = "block";
} 