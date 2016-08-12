alert("Aperte x nessa e na proxima janela.\nDepois tecle F12.\nDepois tecle CTRL + F5.\nSe for a segunda vez que le essa mensagem. Clique OK e comece o jogo");

console.log("BEM VINDO AO JOGO DA FORCA");
var tentativas = 6;
var palavraSecreta = prompt("A palavra secreta eh:");
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
  var letra = prompt("Escolha a letra: ");
  palavraAdivinhada = ""
  adivinhou = false;
  for (i = 0; i < palavraSecreta.length; i++) {


    if(palavraSecreta.charAt(i) == letra) {
        console.log("Acertou a Letra: " + letra);
        adivinhada[i] = true;
        adivinhou = true;
    }

  }
  if (adivinhou == false) {
    console.log("Errou a letra:" + letra);
    tentativas--;
  }
  console.log("Chances de erro: " + tentativas);
} while (tentativas > 0)
console.log(palavraSecreta);
if(tentativas == 0) {
  console.log("PERDEU!");
}

//this code was write with the classmate github user pinheiro000
