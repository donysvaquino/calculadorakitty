// Linha de raciocínio: cada botão na calculadora no HTML, terá sua variável em js, ao clicar executará uma ação: a array "calculo" recebera esse valor somado ao seu final, ao clicar no botão "=" a array se transformará em um cálculo e o resultado será exibido na tela. ao clicar no botão de apagar o último número da array será apagado.

let calculo = [];

const visor = document.getElementById('result');

function addToCalc (numero) {
        calculo.push(numero);
        visor.innerHTML += numero;
};

function clearVisor () {
    visor.innerHTML = "";
    calculo = [];
};

function viewResult () {
        let res = calculo.join("");
        res = eval(res);
        calculo = [];
        calculo = [res];
        console.log(res);
        visor.innerHTML = res;
};

function backSpace (){
    calculo.pop();
    visor.innerHTML = visor.innerHTML.slice(0, -1);
}



