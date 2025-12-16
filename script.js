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
function exercicio2() {
    console.log('Executando Exercício 2: Verificar maioridade');

    const idade = parseInt(prompt("2. Digite sua idade:"));

    if (isNaN(idade) || idade < 0) {
        console.log("Erro: Idade inválida. Por favor, digite uma idade válida.");
    } else if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
}
function exercicio3() {
    console.log('Executando Exercício 3');
    const input = prompt("3. Digite um número inteiro para verificar se é par ou ímpar:");
    const number = parseInt(input);
    
        alert("Verificando se o número é par ou ímpar");
        if (isNaN(number)) {
            console.log("Erro: Entrada inválida. Por favor, digite um número inteiro.");
        } else if (number % 2 === 0) {
            console.log(`O número ${number} é par.`);
        } else {
            console.log(`O número ${number} é ímpar.`);
        }
}
function exercicio4() {
    console.log('Executando Exercício 4');

    alert("Comparar dois números");
        const input1 = prompt("Digite o primeiro número:");
        const input2 = prompt("Digite o segundo número:");
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Erro: Entrada inválida. Por favor, digite números válidos.");
            return;
        } else if (num1 > num2) {
            console.log(`O primeiro número ${num1} é maior que o segundo ${num2}.`);
        } else if (num1 < num2) {
            console.log(`O segundo número ${num2} é maior que o primeiro ${num1}.`);
        } else {
            console.log(`Os dois números são iguais (${num1}).`);
        }
}
function exercicio5() {
    console.log('Executando Exercício 5');
    alert("Classificar nota");

    const input = prompt("Digite a nota de 0-10:");
    const nota = parseFloat(input);
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Erro: Nota inválida. Por favor, digite uma nota entre 0 e 10.");
            return;
        } else if (nota > 7) {
            console.log(`Nota ${nota}: Nota alta`);
        } else if (nota <= 7 && nota >= 5) {
            console.log(`Nota ${nota}: Nota média`);

        } else {
            console.log(`Nota ${nota}: Nota baixa`);
        }
}
function exercicio6() {
    console.log('Executando Exercício 6');
    alert("Calculadora de IMC");
    const inputPeso = prompt("Digite seu peso em kg:");
    const inputAltura = prompt("Digite sua altura em metros:");
    
    const peso = parseFloat(inputPeso);
    const altura = parseFloat(inputAltura);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        console.log("Erro: Valores inválidos. O peso e a altura devem ser números positivos.");
        return;
    }
        const imc = peso / (altura * altura);
        const imcFormatado = imc.toFixed(2);
        alert(`Seu peso é ${peso} kg e sua altura é ${altura} m.`);
        console.log(`Seu IMC é: ${imc}`);
        
        if (imcFormatado < 18.5) {
            console.log("Abaixo do peso, coma mais!");
        } else if (imcFormatado >= 18.5 && imcFormatado < 24.9) {
            console.log("Peso normal, parabéns! Continue assim.");
        } else if (imcFormatado >= 25 && imcFormatado < 29.9) {
            console.log("Sobrepeso, necessita de uma dieta, faz exercícios?!");
        } else {
            console.log("Obesidade, cuidado com isso! Mude seus hábitos!");
        }
        
}

function exercicio7() {
    console.log('Executando Exercício 7');
    alert("Calculadora simples");
    const a = prompt("Digite o primeiro número:");
    const b = prompt("Digite o segundo número:");
    const operacao = prompt("Digite a operação (+, -, *, /):");

    if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
        console.log("Erro: Entrada inválida. Por favor, digite números válidos.");
        return;
    }
    switch (operacao) {
        case "+":
            resultado = a + b;
            console.log(`O resultado de ${a} + ${b} é: ${resultado}`);
            break;
        case "-":
            resultado = a - b;
            console.log(`O resultado de ${a} - ${b} é: ${resultado}`);
            break;
        case "*":
            resultado = a * b;
            console.log(`O resultado de ${a} x ${b} é: ${resultado}`);
            break;
        case "/":
            resultado = a / b;
            console.log(`O resultado de ${a} / ${b} é: ${resultado}`);
            if (b === 0) {
                console.log("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            console.log(`Operação inválida: ${operacao}. Por favor, use +, -, * ou /.`);
            break;
        }
}
function exercicio8() {
    console.log('Executando Exercício 8');
    alert("Dia da semana");
    const input = prompt("Digite o dia de hj:");
    const dia = input.toLowerCase();
    const diaAtual = new Date().toLocaleDateString('pt-BR', { weekday: 'long' }).toLowerCase();
        switch (diaAtual) {
            case "segunda":
                console.log("Hoje é Segunda-feira.");
                break;
            case "terça":
                console.log("Hoje é Terça-feira.");
                break;
            case "quarta":
                console.log("Hoje é Quarta-feira.");
                break;
            case "quinta":
                console.log("Hoje é Quinta-feira.");
                break;
            case "sexta":
                console.log("Hoje é Sexta-feira.");
                break;
            case "sábado":
                console.log("Hoje é Sábado.");
                break;
            case "domingo":
                console.log("Hoje é Domingo.");
                break;
            default:
                console.log("Dia inválido.");
                break;
        }
    dia === diaAtual ? console.log(`Você acertou! Hoje é ${diaAtual}.`) : console.log(`Você errou. Hoje é ${diaAtual}, não ${dia}.`);
}
function exercicio9() {
    console.log('Executando Exercício 9');
    alert("Verificar múltiplos");
    const val1 = parseInt(prompt("Digite o primeiro valor:"));
    const val2 = parseInt(prompt("Digite o segundo valor:"));
        if (val1 % val2 === 0) {
            console.log(`${val1} é múltiplo de ${val2}.`);
        } else {
            console.log(`${val1} não é múltiplo de ${val2}.`);
        }
}
function exercicio10() {
    console.log('Executando Exercício 10');
    alert("Sistema de login simples");
        const username = prompt("Digite seu nome de usuário:");
        const password = prompt("Digite sua senha:");
        
        const validUsername = "usuario";
        const validPassword = "senha123";

        if (username === validUsername && password === validPassword) {
            console.log("Login bem-sucedido! Seja bem-vindo(a).");
        } else {
            console.log("Usuário ou senha incorretos.");
        }
        
}