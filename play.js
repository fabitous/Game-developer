alert("BEM VINDO AO JOGO DA FORCA!");

console.log("BEM VINDO AO JOGO DA FORCA");
var tentativas = 6;
var palavraSecreta = prompt("A palavra secreta eh?");
var palavraAdivinhada = "";
var advinhou = false;
var adivinhada = [];
adivinhada.length = palavraSecreta.length;

for (i = 0; i < palavraSecreta.length; i++) {
  adivinhada[i] = false;
}
do {
  var ganhou = true;
  for (i = 0; i < palavraSecreta.length; i++) {
    if (adivinhada[i] == false) {ganhou = false;}
  }

  if(ganhou) {
	alert("GANHOU");
    console.log("GANHOU!");
    break;
  }

  for (i = 0; i < palavraSecreta.length; i++) {
    if (adivinhada[i] == true) {
      palavraAdivinhada += palavraSecreta.charAt(i) + " ";
    }else {
      palavraAdivinhada += "_ ";
    }
  }
  console.log(palavraAdivinhada);
  var letra = prompt(palavraAdivinhada + "\n\n ...Escolha uma letra: ");
  palavraAdivinhada = ""
  adivinhou = false;
  for (i = 0; i < palavraSecreta.length; i++) {


    if(palavraSecreta.charAt(i) == letra) {
		alert("Acertou a Letra: " + letra);
        console.log("Acertou a Letra: " + letra);
        adivinhada[i] = true;
        adivinhou = true;
    }

  }
  if (adivinhou == false) {
	  alert("Errou a letra: " + letra);
    console.log("Errou a letra: " + letra);
    tentativas--;
  }
  alert("Chances de erro: " + tentativas);
  console.log("Chances de erro: " + tentativas);
} while (tentativas > 0)
console.log(palavraSecreta);
if(tentativas == 0) {
	alert("PERDEU");
  console.log("PERDEU!");
}

//this code was write with the classmate github user pinheiro000
