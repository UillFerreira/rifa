var content = document.getElementById("main");
var btn     = document.getElementById("criar");

btn.addEventListener("click", callRifa);
function callRifa() {
    var qtd     = document.getElementById("qtd").value;
    var valor   = document.getElementById("valor").value;
    var texto   = document.getElementById("texto").value;
    var cartela = document.getElementById("num_cartela").value;
    var qtd_impre = document.getElementById("qtd_impre").value;
    if (qtd == "") { 
        alert("Preencha a quantidade");
        return;
    }
    qtd = parseInt(qtd);
    if (valor == "") {
        alert("Preencha o valor");
        return;
    }
    if (texto == "") {
        alert("Preencha o texto");
        return;
    }
    if (cartela == "") {
        alert("Preencha o campo de quantidades de numeros por canhoto");
        return;
    }
    if (qtd_impre == "") {
        qtd_impre = 9;
    }
    qtd_impre = parseInt(qtd_impre);
    // Atualiza o valor da quantidade, que n pode ser menor que o quantidade de npumeros por canhoto da rifa
    if (cartela > qtd) {
        qtd = cartela;
        document.getElementById("qtd").value = cartela;
    }
    cleanElm();
    criarRifas(qtd, valor, texto, cartela, qtd_impre).then(function () {
        window.print();
    });
}
// limpa
function cleanElm() {
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }    
}
function criarRifas (qtd, grana, texto, cartela, qtd_impre) {
    return new Promise(function (resolve, reject) {
        for (var i = 1; i <= qtd/cartela; i++) {
            var container = document.createElement("div");
            container.setAttribute("class", 'container');
            content.appendChild(container);

            var header = document.createElement("div");
            header.setAttribute("class", 'header');
            container.appendChild(header);

            var n1 = document.createElement("div");
            n1.innerText = i;
            n1.setAttribute("class", 'item');
            header.appendChild(n1);

            var valor = document.createElement("div");
            valor.setAttribute("class", 'item');
            valor.innerText = grana;
            header.appendChild(valor);

            var n2 = document.createElement("div");
            n2.setAttribute("class", 'item');
            if (cartela > 1) n2.innerText = 500 + i;
            header.appendChild(n2);

            var conteudo = document.createElement("div");
            conteudo.setAttribute("class", 'conteudo');
            conteudo.innerText = texto; 
            container.appendChild(conteudo);

            if (i%qtd_impre == 0) {
                let bk = document.createElement("div");
                bk.setAttribute("class", 'pagebreak');
                content.appendChild(bk);
            }
            if (i == qtd/cartela) resolve();
        }
    })
}


/*
<div class="container">
n1
valor
n2
conteudo
</div>
*/
