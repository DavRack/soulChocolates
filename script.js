const valorLetra = {
"A":33,
"B":38,
"C":33,
"D":38,
"E":25, 
"F":24,
"G":32,
"H":39,
"I":19,
"J":22,
"K":38,
"L":20,
"M":49,
"N":37,
"Ñ":46,
"O":34,
"P":30,
"Q":38,
"R":35,
"S":29,
"T":25,
"U":42, 
"V":36, 
"W":49,
"X":32,
"Y":26,
"Z":26  
}
function calculate(test){
    console.log(test)
    var text=document.getElementById("user-text").value
    text = text.toUpperCase()

    var costoGramo = Number(document.getElementById("gramo").value)
    var porcentaje = Number(document.getElementById("porcentaje").value)
    var total = 0
    var gramos = 0
    var costoExtra = 0
    var costoCholate = 0
    var precio = 0
    var aux = 0

    for(let i of text){
        aux = valorLetra[i]
        if (aux != null){
            gramos += aux
        }
    }

    costoCholate = gramos*costoGramo

    var extras = document.getElementsByClassName("extra-cost")

    var sub = 0;    
    for (var i = 0, len = extras.length; i < len; i++) {
        sub = parseInt(extras[i].value, 10)
        if (!isNaN(sub)){
            costoExtra += sub
        }
    }

    total = costoCholate+costoExtra
    
    precio = costoCholate + (costoCholate*(porcentaje/100)) + costoExtra

    document.getElementById("total").innerHTML = ``
    document.getElementById("total").innerHTML += `<h2> Precio al cliente: ${precio} </h2>`
    document.getElementById("total").innerHTML += `<h2> Costo total: ${total} </h2>`
    document.getElementById("total").innerHTML += `<h3> Costo total del chocolate: ${costoCholate} </h3>`
    document.getElementById("total").innerHTML += `<h3> Costo total de extras: ${costoExtra} </h3>`
    document.getElementById("total").innerHTML += `<h3> Gramos totales de chocolate: ${gramos} </h3>`
}
function del(element){
    element.parentNode.remove()
}
function addCost(){
    const costo = `
    <div class="extra">
        <input type="text" placeholder="Item" class="extra-text"/>
        <input type="number" placeholder="Costo" value="0" class="extra-cost"/>
        <button class="delete btn" type="submit" onclick="del(this)">Eliminar</button>
    </div>
    `
    document.getElementById("extras").insertAdjacentHTML('beforeend', costo)
}
