
// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function(e){
   // Stop Propagation
   e.stopPropagation();

    // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active")

   // Toggle Class "open" On Links
   tLinks.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button

document.addEventListener("click", (e) => {

  if(e.target !== toggleBtn && e.target !== tLinks){

     // Check If Menu Is Open
     if(tLinks.classList.contains("open")){
       // Toggle Class "menu-active" On Button
       toggleBtn.classList.toggle("menu-active");

       // Toggle Class "open" On Links
       tLinks.classList.toggle("open");
     }


  }
});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
  e.stopPropagation();
}


let i = 0;
let j = 4; 
const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".slider-container");



function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#6B6B6B";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}