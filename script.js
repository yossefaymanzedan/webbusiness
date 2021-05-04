var toggle = document.querySelector(".toggle");
var topNav = document.querySelector(".nav_top ul");


toggle.addEventListener('click', function() {
    console.log("Toggle clicked");
    topNav.classList.toggle("active");
});

function choice() {
    document.querySelector(".choice").style.display = "block";
}
var d = document.querySelector("#date span");
var greetings;
var hours = new Date().getHours();
var mins = new Date().getMinutes();
if (hours < 12) {
    greetings = "Good Morning";
} else {
    greetings = "Good evening";
} 
d.innerHTML = greetings;
document.querySelector("#hours").innerHTML = hours;
document.querySelector("#mins").innerHTML = mins;



document.querySelector(".light").addEventListener("click", function ()  {
    document.querySelector(".choice").style.display = "none";
    alert("Light mode has been enabled.. Please reload the page if you want to choose the dark mode");
});
document.querySelector(".dark").addEventListener("click", function ()  {
    alert("Dark mode has been enabled.. Please reload the page if you want to choose the light mode");
    document.querySelector(".choice").style.display = "none";
 document.querySelector(".nav").style.backgroundColor = "black";
 document.querySelector(".nav").style.color = "white";
 document.querySelector(".toggle").style.border = "3px solid white";
 document.querySelector(".toggle .fas").style.color = "white";
 document.querySelector(".nav ul").style.backgroundColor = "black";
 document.querySelector("#home").style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0), #010101), url(806443.jpg)";
 document.querySelector("body").style.backgroundColor = "#010101";

 var x = document.querySelectorAll(".black");
 var purple = document.querySelectorAll(".purple");
 var gray = document.querySelectorAll(".gray");
 var btn_purple = document.querySelectorAll(".btn-purple");
 var purple_light = document.querySelectorAll(".purple-light");
 var bg_light = document.querySelectorAll(".bg-white");
 var box_shadow = document.querySelectorAll("#box_shadow");
 var lead = document.querySelectorAll(".lead");
 var fa_chart_line = document.querySelectorAll(".fa-chart-line");
 var chart_box = document.querySelectorAll("#cards_1 .row .col-xxl-2");
 var fs1_1_cards = document.querySelectorAll("#cards_1 .row .col-xxl-2 .fs-1");
 var btn_purple_light = document.querySelectorAll(".btn-purple-light");
 var features5 = document.querySelectorAll("#features5 .row .col-xxl-3");
 var small = document.querySelectorAll(".small");
 var purple_icon = document.querySelectorAll(".purple-icon");

 
 var i;
 for(i=0; i < purple_icon.length; i++) {
    purple_icon[i].style.color = "white";
   
}
 for(i=0; i < small.length; i++) {
    small[i].style.color = "#F0ECE2";
   
}
 for(i=0; i < features5.length; i++) {
    features5[i].style.boxShadow = "1px 2px 4px 1px white";
   
}
 for(i=0; i < btn_purple_light.length; i++) {
    btn_purple_light[i].style.color = "#F0ECE2";
    btn_purple_light[i].style.border = "3px solid  #F0ECE2";
}
 for(i=0; i < fs1_1_cards.length; i++) {
    fs1_1_cards[i].style.color = "#F0ECE2";
}
 for(i=0; i < chart_box.length; i++) {
    chart_box[i].style.boxShadow = "1px 2px 8px 1px white";
}
 for(i=0; i < fa_chart_line.length; i++) {
    fa_chart_line[i].style.color = "white";
}
 for(i=0; i < box_shadow.length; i++) {
    box_shadow[i].style.boxShadow = "1px 2px 8px 1px white";
}
for(i=0; i < lead.length; i++) {
    lead[i].style.color = "#F0ECE2";
}
 for(i=0; i < x.length; i++) {
     x[i].style.color = "white";
 }
 for(i=0; i < purple.length; i++) {
    purple[i].style.color = "#ECECEC";
}
for(i=0; i < gray.length; i++) {
    gray[i].style.color = "#F0ECE2";
}
for(i=0; i < btn_purple.length; i++) {
    btn_purple[i].style.backgroundColor = "#F2A365";
    btn_purple[i].style.boxShadow = "0px 5px 20px #F2A365";
    
}
for(i=0; i < bg_light.length; i++) {
    bg_light[i].style.backgroundColor = "#222831";
   
    
}
for(i=0; i < purple_light.length; i++) {
    purple_light[i].style.color = "#F0ECE2";
   
    
}
});
