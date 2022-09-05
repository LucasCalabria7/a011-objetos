const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
let elenco = filme.elenco;
console.log(elenco[0]);       //Exercício A

console.log(elenco[elenco.length-1]);       //Exercício B

console.log(filme.transmissoesHoje);    //Exercício C

console.log(filme.transmissoesHoje[1].horario);    //Exercício D