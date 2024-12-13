function sortear() {
//FUNCAO QUE RECEBE OS VALORES INDICADOS NO INPUT DO TIPO INTEIRO

    let quantidade = parseInt(document.getElementById('quantidade').value); //VAR QUANTIDADE VAI RECEBER O VALOR INSERIDO NO INPUT
        console.log(quantidade);
    let de = parseInt(document.getElementById('de').value); //VAR DE VAI RECEBER O VALOR INSERIDO NO INPUT
        console.log(de);
    let ate = parseInt(document.getElementById('ate').value); //VAR ATE VAI RECEBER O VALOR INSERIDO NO INPUT
        console.log(ate);

//ARRAY PARA GUARDAR A QUANTIDADE DE NUMEROS PEDIDOS PELO USUARIO - UTILIZANDO LOOP FOR

    let numerosSorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
    //CRIA A VARIAVEL PADRAO i QUE COMECA COM O VALOR 0|| ENQUANTO ELA FOR MENOR DO QUE A QUANTIDADE DIGITADA PELO USUARIO ELA INCREMENTA UM
    
    //ATRIBUIR EM VARIAVEL O VALOR DO NUMERO ALEATORIO
        numero = obterNumeroAleatorio(de, ate);

    //COLOCA O VALOR DA VARIAVEL NUMERO NA ARRAY
        numerosSorteados.push(numero);

        alert(numerosSorteados);
    }
} 
function obterNumeroAleatorio(min, max){ 
//CRIANDO FUNCAO QUE OBTEM UM NUMERO ALEATORIO COM OS PARAMETROS DE VALOR MINIMO (MIN) E VALOR MAXIMO (MAX)

    return Math.floor(Math.random() * (max - min + 1)) + min; //RETORNA UM NUMERO INTEIRO QUE CONSIDERA O VALOR MINIMO ('DE') E O VALOR MAXIMO ('ATE')
//essa funcao funciona dessa maneira apenas para um numero

}