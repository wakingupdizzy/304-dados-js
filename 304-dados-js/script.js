// let nome = prompt("Digite o seu nome");
// let ano = Number(prompt("Digite o ano em que você nasce:"));
// let idade = 2019 - ano;

// alert("Olá, eu me chamo " + nome + " e tenho " + idade + " anos, e estou estudando javascript ");

 let nome = prompt("Digite o seu nome");
 let matricula = Number(prompt("Digite o seu numero de matricula:"));

 let nota1 = Number(prompt("Digite sua primeira nota"));
 let nota2 = Number(prompt("Digite sua segunda nota"));

 let media = (nota1+nota2)/2;

 alert("O aluno, " + nome + " matricula " + matricula + ", obteve a média final" + media);

let ano = media;

if(media > 0 && media <= 10){
    alert("Acerto mizeravi");
}

else if (meida === 0) {
    alert('a média nao pode ser igual a 0');
}

else {
    alert('a média não pode ser maior que 10');
}

