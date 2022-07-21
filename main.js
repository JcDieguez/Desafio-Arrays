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

// Los datos que voy a introducir en la lista nombre y precio
let lista = [];
function agregar() {
    lista.push(nuevoProducto);
    document.getElementById("tabla").innerHTML += '<tbody><td td>' + nuevoProducto.nombre + '</td><td>' + nuevoProducto.precio + '</td></tbody>';
};


// Calculo el total de los productos ingresados 
function calcular_total() {
    let suma = 0;
    lista.forEach(producto => {
        suma = suma + parseInt(producto.precio);
    })
    document.getElementById("suma").innerHTML = '$' + suma;
}



// Agregué evento donde limpio toda la tabla mediante un boton
let borrar = document.getElementById("borrar")
borrar.addEventListener("click", function() {
    document.getElementById("tabla").innerHTML ='<thead><tr><th scope="col">Producto</th><th scope="col">Precio</th></tr></thead>';
    document.getElementById("suma").innerHTML = '$' + 0;
})
