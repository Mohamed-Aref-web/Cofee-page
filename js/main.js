let iconBtn1 = document.getElementById("icon-1");
let iconBtn2 = document.getElementById("icon-2");
let iconBtn3 = document.getElementById("icon-3");

iconBtn1.onclick = function(){
    iconBtn1.classList.add("active");
    iconBtn2.classList.remove("active");
    iconBtn3.classList.remove("active");
}

iconBtn2.onclick = function(){
    iconBtn1.classList.remove("active");
    iconBtn2.classList.add("active");
    iconBtn3.classList.remove("active");
}

iconBtn3.onclick = function(){
    iconBtn1.classList.remove("active");
    iconBtn2.classList.remove("active");
    iconBtn3.classList.add("active");
}



let openIcon = document.getElementById("open-btn");
let closeIcon = document.getElementById("close-btn");
let menu = document.querySelector(".navbar .navmenu");

openIcon.onclick = function(){
    menu.style.left = "0";
}

closeIcon.onclick = function(){
    menu.style.left = "-250px";
}

