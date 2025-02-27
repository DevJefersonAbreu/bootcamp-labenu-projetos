// Exercícios


// Exercício 0A

function soma(num1, num2) {
    return num1 + num2
  }
  
  // Exercício 0B
  
  function imprimeMensagem() {
    const mensagem = prompt('Digite uma mensagem!')
  
    console.log(mensagem)
  }
  
  //Exercício 1
  
  function calculaAreaRetangulo() {
    const altura = Number(prompt("Insira a altura"))
    const largura = Number(prompt("Insira a largura"))
    console.log(altura * largura)
  }
  
  //Exercício 2
  
  function imprimeIdade() {
    const anoAtual = Number(prompt("Insira o ano atual"))
    const anoNascimento = Number(prompt("Insira seu ano de nascimento"))
    console.log(anoAtual - anoNascimento)
  }
  
  //Exercício 3
  
  function calculaIMC(peso, altura) {
    return peso / (altura * altura)
  }
  
  //Exercício 4
  
  function imprimeInformacoesUsuario() {
    const nome = prompt("Insira seu nome")
    const idade = prompt("Insira sua idade")
    const email = prompt("Insira seu email")
  
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  }
  
  //Exercício 5
  
  function imprimeTresCoresFavoritas() {
    const cor1 = prompt("Insira sua primeira cor favorita")
    const cor2 = prompt("Insira sua segunda cor favorita")
    const cor3 = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
  }
  
  //Exercício 6
  
  function retornaStringEmMaiuscula(string) {
    return string.toUpperCase()
  }
  
  //Exercício 7
  
  function calculaIngressosEspetaculo(custo, valorIngresso) {
    return custo / valorIngresso
  }
  
  // Exercício 8
  
  function checaStringsMesmoTamanho(string1, string2) {
    return string1.length === string2.length
  }
  
  // Exercício 9
  
  function retornaPrimeiroElemento(array) {
    return array[0]
  }
  
  // Exercício 10
  
  function retornaUltimoElemento(array) {
    return array[array.length - 1]
  }
  
  //Exercício 11
  
  function trocaPrimeiroEUltimo(array) {
    const primeiro = array[0];
    const ultimo = array[array.length - 1];
  
    array[0] = ultimo;
    array[array.length - 1] = primeiro;
  
    return array;
  }
  
  
  // Exercício 12
  
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase()
  }
  
  // Exercício 13
  
  function checaRenovacaoRG() {
    const anoAtual = Number(prompt("Digite o ano atual"))
    const anoNascimento = Number(prompt("Digite o ano de nascimento"))
    const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))
  
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
  
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
  
    console.log(cond1 || cond2 || cond3)
  }
  
  // Exercício 14
  
  function checaAnoBissexto(ano) {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
  }
  
  // Exercício 15
  
  function checaValidadeInscricaoLabenu() {
    const maiorDeIdade = prompt("Você tem mais de 18 anos?")
    const ensinoMedio = prompt("Você possui ensino médio completo?")
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  
    console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")
  }