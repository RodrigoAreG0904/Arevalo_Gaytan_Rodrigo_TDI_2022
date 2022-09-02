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

  //Parte del formulario para práctica 3
  function valida_envia(form){
    //valido el nombre
    if (document.getElementById('nombre-f').value.length==0){
         alert("Tiene que escribir su nombre")
         return 0;
    }

    if (document.getElementById('email-f').value.length==0){
      alert("Tiene que escribir su correo")
      return 0;
    }

    if (document.getElementById('direccion-f').value.length==0){
      alert("Tiene que escribir su direccion")
      return 0;
    }

    //valido el interés
    // no supe como validar las casillas :c
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.form.submit();
  }

  function show_headphones(){
    let headphones = ["air-pods", "marshall-majorIV", "beats"]
    for (let i = 0; i < headphones.length; i++) {
      // Se ejecuta 5 veces, con valores del paso 0 al 4.
      alert('Vendemos todo tipo de audifonos, vendemos ' + headphones[i]);
    }
  }

  function show_while(){
    let n = 0;
    let x = 0;
    alert('vamos a regresar la suma de 1, 2 y 3');
    alert(x);
    while (n < 3) {
      n++;
      x += n;
      alert(x);
    }

  }
