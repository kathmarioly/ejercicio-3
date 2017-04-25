function convertirCelsius(celsius){ 

   var farenheit = document.getElementById("celsius").value;
   document.write( Math.round((5/9) * (farenheit - 32)));

}