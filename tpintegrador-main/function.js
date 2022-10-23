let cantidad = document.getElementById("cantidad");
let descuentos = document.getElementById("select-option");
let btnResumen = document.getElementById("btn-resumen");
let btnBorrar = document.getElementById("btn-borrar");
let ticket = 200;

function obtenerValor(){
    output = descuentos.value;
    valorCantidad = cantidad.value;
    if(output == "junior" && output != "estudiante" && output !="trainee"){
        let descuento = valorCantidad*ticket;
        let descuentoTotal = descuento*0.15;
        document.getElementById("descuentoTotal").textContent = descuentoTotal;
    }else if(output == "estudiante" && output != "junior" && output !="trainee"){
        let descuento = valorCantidad*ticket;
        let descuentoTotal = descuento*0.8;
        document.getElementById("descuentoTotal").textContent = descuentoTotal;
    }else if(output == "trainee" && output != "junior" && output != "estudiante"){
        let descuento = valorCantidad*ticket;
        let descuentoTotal = descuento*0.5;
        document.getElementById("descuentoTotal").textContent = descuentoTotal;
    }
}

function borrar(){
    document.getElementById("descuentoTotal").textContent = null;
    document.getElementById("cantidad").value = null;
}
btnResumen.addEventListener("click",obtenerValor);
btnBorrar.addEventListener("click",borrar);
