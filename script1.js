function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.saludar = function(){
        alert("¡Bienvenido a La Moviola Cines "+ this.nombre+ " " +this.apellido+"!");
        alert("En nuestros cines vas a poder disfrutar de: \n-Comprar entradas para tus peliculas favoritas  \n-Comprar pochoclos \n-Hacerte socio de Moviola Club");
    }
}


let nombre = prompt ("Ingrese un nombre: ");
let apellido = prompt ("Ingrese un apellido: ");
let edad = parseInt(prompt("Ingrese la edad:"));

const persona1 = new Persona(nombre, apellido, edad);

persona1.saludar();


class Productos {
    constructor (producto, precio){
        this.producto = nombre;
        this.precio= precio;
    }
}

let entradas = new Productos ("Entradas", 500);
let pochoclos = new Productos("Pochoclos", 400);
let nachos = new Productos("Nachos", 300);
let gaseosa = new Productos("Gaseosa", 450);
let chipa = new Productos ("Chipa", 250);


function comprarItems (Productos) {
    let items = "";
    let terminar_compras = true ;

    while (terminar_compras) {

        let lista = prompt ("Anota acá lo que queres comprar");
        let compra = listaCompras (lista) ;
        

        if (compra){
            alert ("Se agrego al carrito :"+compra);
        
            
            
            items += "\n"+compra;
        

        }else {

            if (lista === null) {
                terminar_compras = false;

            }else {
                alert("No contamos con eso en el cine");
            }
        
        }
    }

    if (items != "") {
        
        let resp = confirm ("Estos son los items que quiere comprar?"+items);
        if (resp) {
            alert ("Los items del carrito han sido adquiridos")
        }

    }


}



function listaCompras (lista) {

    let compra ;
    switch (lista) {

        case "entradas" :
            compra = "Entradas de cine" ;
            break;
        
        case "pochoclos" : 
            compra = "Pochoclos chicos";
            break;

        case "nachos" :
            compra = "Nachos con cheddar";
            break;
        
        case "gaseosa" :
            compra = "Gaseosa grande";
            break;

        case "chipa" :
            compra = "Chipa";
            break;

        default : 
            compra = false;

    }

    return compra ;
}

document.addEventListener('DOMContentLoaded', function() {
    comprarItems();

});
