//Data do evento
var diaDoEvento = 17
var mesDoEvento = 03
var anoDoEvento = 2022

//Data Atual
var diaAtual = 25
var mesDoEvento = 03
var anoDoEvento = 2022

// Validação da data
if(anoDoEvento => anoAtual){
    if(mesDoEvento => mesAtual){
        if(diaDoEvento => diaAtual){
            console.log("Data Válida!")
        }else{
            console.log("Data inválida")
        }
                 }else {
                        console.log("Data inválida")
               }
                          }else{
    console.log("Data inválida")
                    }


//validação da idade
let idade = 19
if (idade < 18 ){
    console.log("Desculpe! Evento para maiores de 18 anos.")
}else{
    console.log("Você está apto; Qual o Nome do evento?.")
}

// Escolhendo o evento
const nomeEvento = ("Nome do evento");
console.log(nomeEvento)

 //validação de idade
 var listaDeParticipantes = ["José", "Pedro","Rodrigo","alessandro","Thago","Junior"]
 if (listaDeParticipantes.length < 100) {
     console.log ("Temos vagas para este Evento")
 }else {
     console.log ("Não temos Vagas para esse evento")
 }

 