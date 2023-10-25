const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Inserisci il tuo cognome");
const colore = prompt("Qual è il tuo colore preferito?");
const password = nome + cognome + colore + "#23"


document.getElementById("welcome").innerHTML = "benvenuto, " + nome;
document.getElementById("welcome").style.color = "red";
document.getElementById("password").innerHTML = `La tua password è ${password}`;
