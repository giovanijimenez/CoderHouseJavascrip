let serieTres = document.getElementById ("serieTres");
let teramont = document.getElementById ("teramont");
let mustang = document.getElementById ("mustang");

serieTres.onclick = () => {console.log("agregaste BMW serie Tres");}
teramont.onclick = () => {console.log("agregaste VW teramont");}
mustang.onclick = () => {console.log("agregaste Ford mustang")}


console.log(serieTres.innerHTML);

let sleccionAuto = document.getElementById("seleccionado");
console.log(seleccionado.innerHTML);

//Cambio seleccion
seleccionado.innerHTML = "bmw serie 3"
console.log(seleccionado.innerHTML);



const ejCrear = document.getElementById("ejCrear");

const ejeCrear = document.createElement("p");


console.log(ejeCrear);



//json
const serie3 = {
    id: 1,
    modelo: "Serie 3",
    precio: 950000,
};
const teramontVW = {
    id: 2,
    modelo: "Teramont",
    precio: 857490,
};
const mustangFord = {
    id: 3,
    modelo: "Mustang",
    precio: 1236900,
};

localStorage.setItem("serie3", serie3);
localStorage.setItem("teramont", teramont);
localStorage.setItem("mustang", mustang);



const productoJson = JSON.stringify(serie3);

console.log(productoJson);
console.log(typeof serie3);
console.log(typeof productoJson);

localStorage.setItem("serie3", productoJson)