function executarFizzBuzz() {
    const n = document.getElementById("numero").value; //pegando valor do input
    const resultadoDiv = document.getElementById("resultado"); //pegando div de resultado

    resultadoDiv.innerHTML = "";

    for (let i = 1; i <= n; i++) { //fazendo loop de 1 até n

        if (i % 3 === 0 && i % 5 === 0) { //verificando se é múltiplo de 3 e 5
            resultadoDiv.innerHTML += "FizzBuzz <br>";
        } 
        else if (i % 3 === 0) { //verificando se é múltiplo de 3
            resultadoDiv.innerHTML += "Fizz <br>";
        } 
        else if (i % 5 === 0) {//verificando se é múltiplo de 5
            resultadoDiv.innerHTML += "Buzz <br>";
        } 
        else {
            resultadoDiv.innerHTML += i + " <br>";//caso contrário, apenas o número
        }
    }
}