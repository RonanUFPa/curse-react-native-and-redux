/*
Script para realizar calcúlo da média simples de 3 notas de provas

var nota1=7;
var nota2=9;
var nota3=10;
//abaixo é feito o calculo da média das 3 notas do periodo
var media = (nota1+nota2+nota3)/3;
document.write("Teste\n");

*/

/*
• Array simples e ArraysMultidimensionais

var lista_dois = Array('Arroz', 'Feijão', 'Macarrão', 'Abacaxi', 'Refrigerante'); //Instanciando um array

var lista_um = ['Arroz', 'Feijão', 'Macarrão', 'Abacaxi', 'Refrigerante']; //Outra forma de implemntar array

document.write('\n',lista_um[1]);

document.write('\n',lista_dois[0]);

var automoveis = Array(); // criando array primario

automoveis['Carros'] =[]; //criando um array bidimensional    
automoveis['Motos'] = []; //criando um segundo array bidimensional

automoveis['Carros'][1] = 'Fiat Palio';
automoveis['Carros'][2] = 'Honda civic';

automoveis['Motos'][1] = 'XTR';

document.write('\n',automoveis['Carros'][1]);
document.write('\n',automoveis['Motos'][1]);

*/


/*
• if else

if(){

}else{

}

• operadores de comparação:
Igual -> ==
Idêntico -> === (iguais em valores e tipos)
Diferente -> !=
Não idêntico !== (diferentes nos valores e tipos)
menor esquerda -> <
menor direita -> >
menor igual -> <=
Maior igual -> >=

•Operadores lógico:

E(&&) - verdadeiros se todas expressões forem verdadeiras
OU(||) - Verdadeiro se pelo menos umas das expressões for verdadeira
Negação(!) - Inverte o resultado da expressão de comparação


//pratica de if, else e operadores de comparação

var n1 = prompt('Digite a primeira nota');
var n2 = prompt('Digite a segunda nota');

var media = 5;

if (n1/n2 >= media) {
    document.write('Aprovado');
} else {
    document.write('Reprovado');
}


var n2 = prompt('Segunda nota');
var faltas = prompt("Quantas faltas");
var media_aluno = (n1+n2)/2;
var media = 7;
var faltas_maximas = 15;


if(media_aluno >= media && faltas <= faltas_maxima ){
	document.write('Aprovado');
}else{
	document.write('Reprovado');
}
*/
/*
var opcao = prompt("Digite a opção");

switch (parseInt(opcao)) {
    case 1:
        document.write("Opção 1");
        break;
    case 2:
        document.write("Opção 2");
        break;

    default:
        document.write("invalido");
        break;
}
*/
/*
var n1 = 10;
var n2 = 20;

console.log('A soma entre ' + n1 + ' + ' + n2 + ' é = ' + (n1+n2) );
console.log('A subtração entre ' + n1 + ' + ' + n2 + ' é = ' + (n1-n2) );
console.log('A multiplicação entre ' + n1 + ' + ' + n2 + ' é = ' + (n1*n2) );
console.log('A divisão entre ' + n1 + ' + ' + n2 + ' é = ' + (n1/n2) );
console.log('o imcremento de ' + n1 + ' é = '+ (++n1) );
console.log('o imcremento de ' + n2 + ' é = '+ (++n2) );
*/

//Estrutura de repetições: for, while e do while
/*
//while
var x = 1;

console.log("Inicio do loop");

while (x <= 5) {
    if (x == 3) {
        x++;
        continue;
        
    }
    console.log(x);
    x++;

}
console.log("Fim do loop");


// do while
var x = 1;

do {  // primeiro executa o do independente da condição do while, ai dps vai pro while testar a condição
    console.log(x);
    x = x + 2;
} while (x <=10);

//for
for (var x = 0; x < 10; x++) {
    console.log(x);
    
}
*/

/*
FUNÇÕES

function calAreaTerreno(largura, comprimento) {
    var area = largura * comprimento;
    return area;
}

var area = calAreaTerreno(100,10)
console.log('O terreno possui 0'+area+ ' metros quadrados');
*/
// let para escopo de blocos (privadas)
// var para escopo de funções (globais)

class Casa { //criando uma classe
    constructor(corAtributo, quantidadeQuartosAtributo){ // constructor para declararmos nossos atributos como parametros
        this.cor = corAtributo; // usamos o this para definir um atributo
        this.quantidadeQuartos = quantidadeQuartosAtributo;//podemos usaro this tbm para acessar um atributo ( exibir)
    }
    getInformacoes(){ // Metodo para recuperarmos nossas informações
        console.log("Cor: "+this.cor+ "," + " Quartos: " +this.quantidadeQuartos);
    }
	abrirPortao(){  //instaciando um metodo como se fosse uma função
        console.log("Abrir portão: ");
    }
    static valorCasa(txt, valor){ // Uso do static é quando não precisamos de um objeto para executar nosso metodo
        console.log(txt + valor);
    }
}

var casa = new Casa("Vermelha", 5);//criando um novo objeto
casa.abrirPortao();
casa.getInformacoes();
Casa.valorCasa("O valor da casa pequena é: ", 1500);

var casaGrande = new Casa("Roxo", 15);
casaGrande.getInformacoes();
Casa.valorCasa("O valor da casa grande é: ", 12000);






