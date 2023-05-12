function trocarcor(id) {
    if (id == "vermelho") {
        document.getElementsByTagName("body")[0].style.background = "red"
    }
    else if(id == "azul"){ document.getElementsByTagName("body")[0].style.background = "blue"}
    else if(id == "branco"){  document.getElementsByTagName("body")[0].style.background = "white"}
    
    console.log(id)}


function addItem() {
    let inputText = document.getElementById("input-text").value;
    let itemList = document.getElementById("item-list");
    let newListItem = document.createElement("li");
    let listItemText = document.createTextNode(inputText);
    newListItem.appendChild(listItemText);
    itemList.appendChild(newListItem);
    document.getElementById("input-text").value = "";
}

function trocarImagem() {
    var imagem = document.getElementById("imagem");
    if (imagem.src.match("./imgs/monalisa.jpg")) {
        imagem.src = "./imgs/vandalismo.jpg";
    } else {
        imagem.src = "./imgs/monalisa.jpg";
    }
}


function exibirElemento() {
    document.getElementById("elemento").style.color = "black";
}

function ocultarElemento() {
    document.getElementById("elemento").style.color = "white";
}

