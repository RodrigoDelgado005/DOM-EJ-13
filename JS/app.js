function agregar() {
    let nt
    let obj
    let elemento
    obj = document.getElementById('parrafos')
    if (obj.children.length != 0)
        return
    elemento = document.createElement('li')
    nt = document.createTextNode('Texto1')
    elemento.appendChild(nt)
    obj.appendChild(elemento)
    
    elemento = document.createElement('li')
    nt = document.createTextNode('Texto2')
    elemento.appendChild(nt)
    obj.appendChild(elemento)
}