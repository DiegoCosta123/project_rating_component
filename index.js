let optn = window.document.getElementById('option_main');
let finl = window.document.getElementById('finalize_option');

let valorDoBotaoClicado = document.querySelector(".btn");
let resultado = document.getElementById("number_value");

//essa função abaixo seleciona o valor do botão, certo?
// Esse "valor" aqui no parâmetro vai ser o valor de acordo com que o usuário clica. A gente passa o argumento ali no html
// esse "this" está fazendo uma referência ao próprio elemento. o this faz com que eu consiga acessar as propriedades do elemento
// aqui eu to passando um parâmetro. 

//nessa função abaixo, a variável valorDoBotaoClicado começa vazio, certo?
// quando eu faço valorDoBotaoClicado.value, eu to acessando o valor dela, certo?
// só que o valor é vazio, certo? aí eu faço valorDoBotaoClicado.value = valor
// esse valor seria o valor que o usuário clicou.
//antes de clicar, ele tem um valor padrão, que a gente definiu la no html
// acontece que quando eu clico, eu mudo o valor dele.

//esse valor parametro é o valor da variável que o usuário clicou. E como eu fiz isso?
// eu usei o this.value
//tirei
// ta mostrando indefinido pq nao tem valor. pra gente conseguir captar o valor,
// a gente usa o this.value
//o this é uma palavra-chave que a gente usa assim como por exemplo if, else
// é do javascript, ele existe. a gente usa pra ele pra referenciar o elemento
//ta vendo que quando eu clico ele mostra o html do botao? o this faz isso
// mas como a gente quer o VALOR do elemento do botao, a gente usa o .value 
function valorBotao(valor) {
    return valorDoBotaoClicado.value = valor
}


function btnSub() {

    if (valorDoBotaoClicado.value == "") {
        return;
    }
    finl.style.display = 'block';
    optn.style.display = 'none';
    resultado.textContent = valorDoBotaoClicado.value

}

