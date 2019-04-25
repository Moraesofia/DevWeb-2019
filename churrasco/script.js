function mostrarResultados() {
    document.getElementById("final").style.display = "block";
    var div = document.getElementById("result");
    var html = "<h2>Resultado</h2>";
    div.innerHTML = html;
    totalCarnes();
    totalGuarnicoes();
}

//Total de kq necessários pela quantidade de pessoas
function totalKg() {
    var qntAdultos = document.getElementById("adultos").value;
    var qntCriancas = document.getElementById("criancas").value;
    var total = (qntAdultos * 0.4) + (qntCriancas * 0.2);
    return total;

}

//Separa as carnes desejadas e calcula a quantidade necessária de cada uma
function totalCarnes() {
    var pacote = document.getElementsByName("carne");
    var carnes = new Array();
    for (var i = 0; i < pacote.length; i++) {
        if (pacote[i].checked) {
            carnes.push(pacote[i].value)
        }
    }

    var qnt = totalKg();

    var resultado;
    if (carnes.length > 0) {
        resultado = qnt / carnes.length;
    } else {
        resultado = 0;
    }

    var resultado = qnt / carnes.length;
    resultado = Math.round(10.0 * resultado) / 10.0;

    var kgTot;
    if (carnes.length > 0) {
        kgTot = resultado * carnes.length;
    } else {
        kgTot = 0;
    }
  
    //Html com o resultado
    var html = "<h3>Carnes</h3><ul>\n";
    for (let index = 0; index < carnes.length; index++) {
        const element = carnes[index];
        html = html + "<li>" + element + ": " + resultado + "kg</li>" + "\n";
    }
    html = html + "</ul>";
    html = html + "<p>Total de carne: " + kgTot.toFixed(2) + "kg</p>";

    var div = document.getElementById("result-carnes");
    div.innerHTML = html;
}

function totalGuarnicoes() {
    var qntPessoas = document.getElementById("adultos").value;
    qntPessoas += document.getElementById("criancas").value;

    var pacote = document.getElementsByName("guarnicao");
    var nomes = new Array();
    var qnts = new Array();
    for (var i = 0; i < pacote.length; i++) {
        if (pacote[i].checked) {
            nomes.push(pacote[i].value);
            switch (pacote[i].value) {
                //Pacotes tem 5 unidades
                case "Queijo Coalho":
                    qnts.push(Math.round(qntPessoas / 5));
                    break;
                case "Pão de Alho":
                    qnts.push(Math.round(qntPessoas / 5));
                    break;
                case "Cebola":
                    qnts.push(Math.round(qntPessoas / 2));
                    break;
                case "Melancia":
                    qnts.push(1);
                    break;
                default:
                    break;
            }
        }

    }

    //Html com o resultado
    var html = "<h3>Guarnições</h3><ul>\n";
    for (let index = 0; index < nomes.length; index++) {
        html = html + "<li>" + nomes[index]+ ": " + qnts[index] + " unidades</li>" + "\n";
    }
    html = html + "</ul>";
    html = html + "<p>Total de guarnições: " + nomes.length + " guarnições</p>";
    var div = document.getElementById("result-guarnicoes");
    div.innerHTML = html;

}
