let ageText = prompt('Digite a sua idade');
let age = Number(ageText);

while (age < 18) {
    ageText = prompt('O site só pode ser acessado por maiores de idade');
    age = Number(ageText);
}
document.write(`Seja bem vindo!!!!!!!!!!!!!!!!`);

document.write('<br><br>');

//do e while(faça e enquanto)

let optionText;
do{ 
optionText = prompt('Escolha uma opção: \n\n1 - Caviar\n2 - Almondega\n3 - Figado com feijoada');
option = Number(optionText);
} while(option < 1 || option > 3);

//switch ou case (escolha caso)

switch (option){
    case 1:
        document.write('Escolheu caviar, mas levou pão com ovo!');
        break;
    case 2:
        document.write('Escolheu almondega, mas levou batata doce e frango!');
        break;
    case 3:
        document.write('Escolheu Figado com feijoada, mas levou piscologo! <br>');
        break;
}


//Ultilizando o for(para) para entender com vetores e Matrizes

const boletim = [];
const qtdMaterias = 3;
const qtdProvas = 3;

for (let i = 0; i < qtdMaterias; i ++){
    boletim[i] = [];
    for (let j = 0; j < qtdProvas; j ++){
        const nota = prompt(`digite a nota da ${j + 1}ª Prova da primeira ${i + 1}ª Materia`);
        boletim[i][j] = Number(nota);
    }
}
for (let i = 0; i < qtdMaterias; i ++){
        document.write(`<br> ${i + 1}ª Matéria: `);
    for (let j = 0; j < qtdProvas; j ++){
        document.write(`${boletim[i][j]} `);
    }
}