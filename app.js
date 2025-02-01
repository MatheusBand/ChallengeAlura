let amigoLista=[];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if(nome===''){
        alert('Insira um nome valido');
    }else{
        amigoLista.push(nome);
    }
    limparCampo();
}

function limparCampo(){
    nome = document.getElementById('amigo');
    nome.value = '';
}
function exibirTexto(id, Texto){
    let campo = document.querySelector(id);
    campo.innerHTML = Texto;
}

function listaAmigos() {
    exibirTexto(`listaAmigos, ${nome}`);
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