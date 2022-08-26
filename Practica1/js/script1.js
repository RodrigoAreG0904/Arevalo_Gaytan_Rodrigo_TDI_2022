function openNav() {
    document.getElementById("menu-items").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("menu-items").style.width = "0";
  }
  
  // Get the root element
  var r = document.querySelector(':root');
  
  // Create a function for setting a variable value
  function myFunction_set() {
    var rs = getComputedStyle(r);
    //turns dark mode to light mode
    if("" + rs.getPropertyValue('--flag') == "#000000"){
      r.style.setProperty('--flag', '--flag-l');
      r.style.setProperty('--main-bg-color', rs.getPropertyValue('--main-bg-color-lm'));
      r.style.setProperty('--second-bg-color', rs.getPropertyValue('--second-bg-color-lm'));
      r.style.setProperty('--accent-color', rs.getPropertyValue('--accent-color-lm'));
      r.style.setProperty('--text-color', rs.getPropertyValue('--text-color-lm'));
      r.style.setProperty('--sun', rs.getPropertyValue('--moon'));
      document.getElementById("toggle-btn").innerHTML = '\u{25CF}';
    } else {
      //turns light mode to dark mode
      r.style.setProperty('--flag', "#000000");
      r.style.setProperty('--main-bg-color', "#414361");
      r.style.setProperty('--second-bg-color', "#2A2D43");
      r.style.setProperty('--accent-color', "#FFA9E7");
      r.style.setProperty('--text-color', "#CCCCCC");
      r.style.setProperty('--sun', "#FBE551");
      document.getElementById("toggle-btn").innerHTML = '\u{2600}';
    }
  
  }

  let video = document.querySelector('video');
  this.window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    video.style.opacity = value
  })