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
    this.calcular_total();
}
let suma = 0;
let lista = [];
function agregar() {
    lista.push(nuevoProducto);
    document.getElementById("tabla").innerHTML += '<tbody><td td>'+nuevoProducto.nombre+'</td><td>'+nuevoProducto.precio+'</td></tbody>';
};

function calcular_total(){
    let suma = 0;
    lista.forEach( producto => {
        suma = suma + parseInt(producto.precio);
    })
    document.getElementById("suma").innerHTML = '$'+suma;
}





