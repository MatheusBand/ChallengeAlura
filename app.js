let amigoLista=[];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if(nome===''){
        alert('Por favor, insira um nome valido.');
    }

    if(amigoLista.includes(nome)){
        alert(`O nome ${nome} já esta na lista`);
        limparCampo();
        return;
    }
        amigoLista.push(nome);
    limparCampo();
    exibirLista();
}

function exibirLista() {
    
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML= '';
    amigoLista.forEach((amigo)=>{
        const li = document.createElement('li');
        li.textContent=amigo;
        listaAmigos.appendChild(li);
    });
}



function limparCampo(){
    nome = document.getElementById('amigo');
    nome.value = '';
}

function sortearAmigo() {
    const indiceSorteado=Math.floor(Math.random()*amigoLista.length);
    const amigoSorteado= amigoLista[indiceSorteado];
    
    //oculta a lista
    const listaAmigos=document.getElementById('listaAmigos');
    listaAmigos.style.display='nome';

    let resultadoSorteio=document.getElementById('resultado');
    resultadoSorteio.innerHTML= `<li>O amigo secreto é: ${amigoSorteado}</li>`;


}