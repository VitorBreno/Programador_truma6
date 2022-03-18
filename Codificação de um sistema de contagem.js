let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    console.log(contador)

    if (contador == 0) {
        console.log("O número é zero")
    } else if (contador % 2 == 0){
        console.log("O número é par")
    } else {
        console.log("O número é impar")
    }
}