let amigoLista=[];

function adicionarAmigo() {
    const  = document.getElementById('amigo').value;

    if(nomeAmigo===''){
        alert('Insira um nome valido');
        return;
    }
    amigoLista.push(nomeAmigo);
    limparCampo();
    exibirLista();
    inputNome.focus();
}

function exibirLista() {
    
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML= '';
    amigoLista.forEach((amigo) => {
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
    let quatElementLista=amigoLista.length;
    
    if(quatElementLista == 100){
        amigoLista =[];
    }

    let nomeEscolhido = parseInt(Math.random() *amigoLista.length);
    if(amigoLista.includes(nomeEscolhido)){
        return sortearAmigo();

       }else{
        amigoLista.push(nomeEscolhido);
        console.log(amigoLista);
        console.log(nomeEscolhido);
       }
       
}