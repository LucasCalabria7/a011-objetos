let pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

let pokemon2 = {      //Exercício A
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
};

pokemon1.ataques = [];
pokemon1.ataques.push({nome: "Investida", dano: 40, tipo: "Normal", precisao: 100});  //Exercício B

pokemon2.ataques = [...pokemon1.ataques];   //Exercício C

pokemon1.ataques.push({nome: "Folha Navalha", dano: 45, precisao: 100, tipo: "Grama"});   //Exercício D

pokemon2.ataques.push({nome: "Jato de Água", dano: 40, precisao: 100, tipo: "Água"});    //Exercício E

console.log(pokemon1);
console.log(pokemon2);     //Exercício F