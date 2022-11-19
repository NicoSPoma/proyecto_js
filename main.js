/*** TU ALMACEN ONLINE.COM - CARRITO DE COMPRAS ***/

// Que funcionalidad debe tener un carrito de compras??

//1) Mostrar productos en el HTML de forma dinamica - (Tomar un Array de productos, modificar el DOM e e ir modificando las nuevas CARDS).
//2) Agregar productos al carrito - (Un Array vacio que a medida que se ejecute el simulador, el usuario ira agregando productos al carrito de compras).
//3) Evitar la carga de productos repetidos - (Que no aparezca un producto 2 veces, sino que se modifique la propiedad del producto y que se pueda modificar por su valor).
//4) Mostrar el carrito en el HTML de forma dinamica - (Modificando el DOM y mostrarse todo el carrito).
//5) Eliminar productos del carrito.
//6) Calcular el total de la compra.
//7) Vaciar el carrito por completo.
//8) Guardar el carrito en el LocalStorage.

///////////////////////////////////////

class Producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const entrada = new Producto(1, "Entrada", 500, "img/entrada.png");
const pochoclo = new Producto(2, "Pochoclo", 250, "img/pochoclo.png");
const gaseosa = new Producto(3, "Gaseosa", 350, "img/gaseosa.png");
const nachos = new Producto(4, "Nachos", 200 ,"img/nachos.png");
const chipa = new Producto(5, "Chipa", 100, "img/chipa.png");
const pancho = new Producto(6, "Pancho", 200, "img/pancho.png");
const alfajor = new Producto(7, "Alfajor", 100, "img/alfajor.png");
const gomitas = new Producto(8, "Gomitas", 100, "img/gomitas.png");

// Creamos un Array con todo nuestro catálogo de productos:

const productos = [entrada, pochoclo, gaseosa, nachos, chipa, pancho, alfajor, gomitas ];

// Creamos el Array carrito

let carrito = [];

//***** CARGAR CARRITO DESDE EL LOCALSTORAGE: *****//
// Si hay algo en el localStorage, lo cargamos en el carrito. Si no, que se inicie vacio.

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//console.log(productos);

// Modificamos el DOM mostrando los productos

const contenedorProductos = document.getElementById("contenedorProductos");

// Creamos una funcion para mostrar los productos:

const mostrarProductos = () => {
    productos.forEach( (producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class = "card">
                 <img src = " ${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}"</img>
                 <div class="card-body">
                 <h5 class="card-title"> ${producto.nombre} </h5>
                 <p class="card-text"> ${producto.precio} </p>
                 <button class="btn colorBoton" id="boton ${producto.id}"> Agregar al carrito </button>
                 </div>
                 </div>
        `
        contenedorProductos.appendChild(card);

        // Agregar productos al carrito:
        const boton = document.getElementById(`boton ${producto.id}`);
        boton.addEventListener("click", () =>{
            agregarAlCarrito(producto.id) 
        })
    })
}

// Funcion agregar al carrito:

const agregarAlCarrito = (id) =>{
    //Lo busca en el Array de Stock
    const producto = productos.find((producto) => producto.id === id);
    //Lo busca en el carrito
    const productoEnCarrito = carrito.find ((producto) => producto.id === id);
    if(productoEnCarrito){
        //Suma +1 en el carrito de ese producto
        productoEnCarrito.cantidad++;
    }else {
        //Suma el producto si no estaba en el carrito
        carrito.push(producto);
        // Al final de la clase, guardamos en el LocalStorage
        // Trabajamos con el LocalStorage:
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    calcularTotal();
}

mostrarProductos();

// MOSTRAR EL CARRITO DE COMPRAS

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", ()=> {
    mostrarCarrito();
})

// Funcion para mostrar el Carrito:

const mostrarCarrito = () => {
    // Cada vez que llame a la funcion se va modificar el DOM y muestra la CARD con los productos almacenados en el Array Carrito
    contenedorCarrito.innerHTML= ""
    // Pasar comillas vacias "" para evitar que se dupliquen cada vez que apretamos Ver Carrito. Con esto limpiamos la propiedad siempre que la iniciamos
    carrito.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class = "card">
                 <img src = " ${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}"</img>
                 <div class="card-body">
                 <h5 class="card-title"> ${producto.nombre} </h5>
                 <p class="card-text"> ${producto.precio} </p>
                 <p class="card-text"> ${producto.cantidad} </p>
                 <button class="btn colorBoton" id="eliminar ${producto.id}"> Eliminar producto </button>
                 </div>
                 </div>
        `
        contenedorCarrito.appendChild(card);

        // Eliminar productos del carrito:
        const boton = document.getElementById(`eliminar ${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

// Funcion que elimina el producto del carrito:

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    //LocalStorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Vaciamos todo el carrito de compras

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () =>{
    eliminarTodoElCarrito();
})

// Funcion para eliminar todo el carrito

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //LocalStorage
    localStorage.clear();
}

// Mostramos mensaje con el total de la compra:

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach((producto) => {
        totalCompra += producto.precio * producto.cantidad;
        // += es igual a poner totalCompra = totalCompra + producto.precio * producto.cantidad
    })
    total.innerHTML = `Total: ${totalCompra}`;

}
// Donde podemos llamar a la funcion calcularTotal ()?
//mostrarCarrito
//agregarAlCarrito

