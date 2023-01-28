let serieTres = document.getElementById ("serieTres");
let teramont = document.getElementById ("teramont");
let mustang = document.getElementById ("mustang");

serieTres.onclick = () => {console.log("agregaste BMW serie Tres"); alert("Agregaste bmw")}
teramont.onclick = () => {console.log("agregaste VW teramont");}
mustang.onclick = () => {console.log("agregaste Ford mustang")}


console.log(serieTres.innerHTML);

let sleccionAuto = document.getElementById("seleccionado");
console.log(seleccionado.innerHTML);

//Cambio seleccion
seleccionado.innerHTML = "serieTres"
console.log(seleccionado.innerHTML);