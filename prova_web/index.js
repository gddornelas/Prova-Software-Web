
function adicionarRegistro() {
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var media = (nota1 + nota2) / 2;

    if (media > 5){
        var situ = 'Aprovado'
    }
    else {
        var situ = 'Reprovado'
    }

    var tabela = document.getElementById("Dados_da_tabela");
    var linha = tabela.insertRow();

    var celulaNome = linha.insertCell(0);
    var celulaMatricula = linha.insertCell(1);
    var celulaNota1 = linha.insertCell(2);
    var celulaNota2 = linha.insertCell(3);
    var celulaMedia = linha.insertCell(4);
    var celulaSitu = linha.insertCell(5);

    celulaNome.innerHTML = nome;
    celulaMatricula.innerHTML = matricula;
    celulaNota1.innerHTML = nota1;
    celulaNota2.innerHTML = nota2;
    celulaMedia.innerHTML = media.toFixed(2);
    celulaSitu.innerHTML = situ;

    document.getElementById("tabela").style.display = "table";
}