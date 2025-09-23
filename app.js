let amigos = [];

function agregarAmigo () {
    let amigoInput = document.getElementById('amigo')
    let listaAmigos = document.getElementById('listaAmigos')
    let nombre = amigoInput.value.trim();

    if(nombre ==='') {
        alert("Favor de ingresar nombres válidos");
        return;
    }

    amigos.push(nombre);

    let li =document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    amigoInput.value='';
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado')

    if(amigos.length <2) {
        alert('Menciona al menos dos amigos');
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    resultado.textContent = "El amigo secreto es :" + amigos [sorteado]
}
console.log 