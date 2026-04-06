let color =["Grey","Black","Red","Yelow"]
let indice = 0

function cambiaColor(){
    document.body.style.backgroundColor=color[indice]
    indice++

    if(indice >= color.length)
        indice = 0
    
}

function saludar(){
    nom= document.getElementById("name").value
    console.log("Buenas tardes "+nom)
}