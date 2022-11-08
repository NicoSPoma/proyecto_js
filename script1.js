/* SISTEMA DE RESERVA DE HOTEL */

class Reserva {
    constructor(nombreCliente, apellidoCliente, numeroReserva, habitacion) {
        this.nombreCliente = nombreCliente ;
        this.apellidoCliente = apellidoCliente ;
        this.numeroReserva = numeroReserva;
        this.habitacion = habitacion;
    }
}


const reservas = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    agregarReserva();
})

function agregarReserva (){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById ("apellido").value;
    const reserva = document.getElementById("reserva").value;
    const habitacion = document.getElementById("habitacion").value;

    const nuevaReserva = new Reserva(nombre, apellido, reserva, habitacion);

    reservas.push(nuevaReserva);

    //verificamos
    console.log(reservas);
    formulario.reset();
}

const contenedorReservas = document.getElementById("contenedorReservas");

const verReservas = document.getElementById("verReservas");

verReservas.addEventListener("click", () =>{
    contenedorReservas.innerHTML = "";

    reservas.forEach( reserva => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div>
                             <p> Nombre del Cliente: ${reserva.nombreCliente} </p>
                             <p> Apellido del Cliente: ${reserva.apellidoCliente} </p>
                             <p> Numero de reserva: ${reserva.numeroReserva} </p>
                             <p> Habitacion: ${reserva.habitacion} </p>
                        </div>
                         `
        contenedorReservas.appendChild(div);
    })
})