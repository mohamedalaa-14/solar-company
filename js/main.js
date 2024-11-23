
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