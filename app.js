let amigoLista=[];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    const regex = /^[A-Za-zÀ]/;//exige que o nome comece com uma letra e a torna maiuscila mesmo que esteja minuscula

    if(nome===''){
        alert('Insira um nome valido');
    }else{
        amigoLista.push(nome);
    }
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