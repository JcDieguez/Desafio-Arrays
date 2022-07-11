function capturar() {
    //console.log("capturado");
    function Articulo(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    let nombreCapturar = document.getElementById("nombre").value;
    //console.log("nombreCapturar");
    let precioCapturar = document.getElementById("precio").value;
    //console.log("precioCapturar");


    nuevoProducto = new Articulo(nombreCapturar, precioCapturar);
    //console.log("nuevoProducto");
    agregar();
}

let baseDatos = [];
function agregar() {
    baseDatos.push(nuevoProducto);
    document.getElementById("tabla").innerHTML += '<tbody><td td>'+nuevoProducto.nombre+'</td><td>'+nuevoProducto.precio+'</td></tbody>';
};

