function sortear() {
//FUNCAO QUE RECEBE OS VALORES INDICADOS NO INPUT DO TIPO INTEIRO

    let quantidade = parseInt(document.getElementById('quantidade').value); //VAR QUANTIDADE VAI RECEBER O VALOR INSERIDO NO INPUT
        console.log(quantidade);
    let de = parseInt(document.getElementById('de').value); //VAR DE VAI RECEBER O VALOR INSERIDO NO INPUT
        console.log(de);
    let ate = parseInt(document.getElementById('ate').value); //VAR ATE VAI RECEBER O VALOR INSERIDO NO INPUT
        console.log(ate);

    var numeroAleatorio = obterNumeroAleatorio(de, ate); //A VAR VAI RECEBER O RETORNO DA FUNCAO DE OBTER NUMERO ALEATORIO, QUE CAPTURA OS VALORES DE 'DE' E 'ATE'
    console.log(numeroAleatorio);
}

function obterNumeroAleatorio(min, max){ 
//CRIANDO FUNCAO QUE OBTEM UM NUMERO ALEATORIO COM OS PARAMETROS DE VALOR MINIMO (MIN) E VALOR MAXIMO (MAX)

    return Math.floor(Math.random() * (max - min + 1)) + min; //RETORNA UM NUMERO INTEIRO QUE CONSIDERA O VALOR MINIMO ('DE') E O VALOR MAXIMO ('ATE')
//essa funcao funciona dessa maneira apenas para um numero

}