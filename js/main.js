document.getElementById("iconMenu").addEventListener("click", function(){
  document.getElementById("navContainer").classList.add("mobileMenuOpen");
  document.body.classList.add("noscroll");
});

document.getElementById("iconTimes").addEventListener("click", function(){
  document.getElementById("navContainer").classList.remove("mobileMenuOpen");
  document.body.classList.remove("noscroll");
});
