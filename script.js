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