    function pegarValores() {
        let n1 = Number(document.getElementById("N1").value);
        let n2 = Number(document.getElementById("N2").value);
        return { n1, n2 };
    }

    function adicionarHistorico(texto) {
        let lista = document.getElementById("historico");

        let item = document.createElement("li");
        item.textContent = texto;

        lista.appendChild(item);
    }

    function limparHistorico() {
        document.getElementById("historico").innerHTML = "";
    }

    function somar() {
        let { n1, n2 } = pegarValores();
        let resultado = somarValores(n1, n2);

        adicionarHistorico(`${n1} + ${n2} = ${resultado}`);
    }

    function diminuir() {
        let { n1, n2 } = pegarValores();
        let resultado = diminuirValores(n1, n2);

        adicionarHistorico(`${n1} - ${n2} = ${resultado}`);
    }

    function mult() {
        let { n1, n2 } = pegarValores();
        let resultado = multiplicarValores(n1, n2);

        adicionarHistorico(`${n1} × ${n2} = ${resultado}`);
    }

    function dividir() {
        let { n1, n2 } = pegarValores();
        let resultado = dividirValores(n1, n2);

        adicionarHistorico(`${n1} ÷ ${n2} = ${resultado}`);
    }

    