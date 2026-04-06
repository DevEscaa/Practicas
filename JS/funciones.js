
console.log("desde script")
const categoria = document.getElementById("cat")

categoria.addEventListener("change", => {
    let precio = parseInt(categoria.value)

    const metodo = document.querySelector('input[name="tpago"]:checked')

    if (!metodo) {
        alert("Selecciona Metodo de pago")
        return
    }

    if (metodo.value == "efectivo"){
        precio = precio * 0.95
    }
    //3.obtener metodo de pago
    document.getElementById("vpagar") = precio
});
