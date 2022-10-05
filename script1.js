


let nombre = prompt("Bienvenido, escribe tu nombre");
let apellido = prompt("Ahora te pedimos tu apellido");
alert("¡Bienvenido a La Moviola Cines "+nombre+" "+apellido+"!");
alert("En nuestros cines vas a poder disfrutar de: \n-Comprar entradas para tus peliculas favoritas  \n-Comprar pochoclos \n-Hacerte socio de Moviola Club");
  


function comprarItems () {
    let items = "";
    let terminar_compras = true ;

    while (terminar_compras) {

        let lista = prompt ("Anota acá lo que queres comprar");
        let compra = listaCompras (lista) ;

        if (compra){
            console.log ("Se agrego al carrito :"+compra);
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
