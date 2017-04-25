

var celcius = [];
var farenheit = celcius.map(function(value){
    return Math.round((value *9)/5 + 32)
  }); 
//Con map estoy recorriendo cada uno de los elementos del array celcius, y en la variable transformacion, estoy haciendo la conversion del array C° a F° mediante la formula de conversión.
document.write(document.getElementById("farenheit").value);