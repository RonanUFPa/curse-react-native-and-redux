//IMC

var nome = 'Ronan';
var altura = 178;
var peso = 97;

altura = altura/100;

m = peso / (altura*altura);


if (m < 16) {
    classificacao = 'Baixo peso, muito grave!';
}
else if(m >= 16 && m <= 16.99){
    classificacao = 'Baixo peso, grave!';
}
else if(m >= 17 && m <= 18.49){
    classificacao = 'Baixo peso!';
}
else if(m >= 18,50 && m <= 24.99){
    classificacao = 'Peso normal!';
}
else if(m >= 25 && m <= 29.99){
    classificacao= 'Sobrepeso!';
}
else if(m >= 18,50 && m <= 24.99){
    classificacao= 'Obsidade grau I!';
}
else if(m >= 30 && m <= 34.99){
    classificacao = 'Obseidade Grau I!';
}
else if(m >= 35 && m <= 39.99){
    classificacao = 'Obseidade Grau II!';
}
else if(m > 40){
    classificacao = 'Obseidade Grau III!';
}

console.log(nome + ' você possui índice de massa corporal igual a '+ m +', sendo classificado como: ' +
classificacao)