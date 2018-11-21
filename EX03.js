console.log("**********     EXERCÍCIO 03    **********");

var idade = prompt("Informe sua idade");
if (idade >= 0 && idade <= 15) {
    console.log("CRIANÇA!")
}
else if (idade > 15 && idade <= 60) {
    console.log("ADULTO!")
} 
else{
    console.log("IDOSO!")
}