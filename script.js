function executarExercicio() {
    const exercicioId = document.activeElement.id;
    switch (exercicioId){
        case '1':
            exercicio1();
            break;
        case '2':
            exercicio2();
            break;
        case '3':
            exercicio3();
            break;
        case '4':
            exercicio4();
            break;
        case '5':
            exercicio5();
            break;
        case '6':
            exercicio6();
            break;
        case '7':
            exercicio7();
            break;
        case '8':
            exercicio8();
            break;
        case '9':
            exercicio9();
            break;
        case '10':
            exercicio10();
            break;
        default:
            console.log('Exercício não encontrado.');
    }
}

function exercicio1() {
    console.log('Executando Exercício 1: Verificador de Número Positivo, Negativo ou Zero');
            
            // Conversão da entrada para o número com parseFloat()
            const input = prompt("1. Digite um número para verificar se é positivo, negativo ou zero:");
            const num = parseFloat(input);

            if (isNaN(num)) {
                console.log("Erro: Entrada inválida. Por favor, digite um número.");
            } else if (num > 0) {
                console.log(`O número ${num} é positivo.`);
            } else if (num < 0) {
                console.log(`O número ${num} é negativo.`);
            } else { // num é igual a 0
                console.log(`O número é zero.`);
            }
}