

function nomeDellaFunzione(){//dichiarazione funzione

    console.log("------------------ecco come si crea una function--------------");

}

nomeDellaFunzione();//invocazione funzione

//---------------------------



let nickname = "bella"

function nome_funzione(name,numeroAScelta){

    console.log("ciao" + " " + name + " " + numeroAScelta  + " " + "cosi" + " " + "puoi"  + " " + "riuilizzare le funzioni")
    //dove ce il name andra stampato il mesaggio
    //dove ce il numeroAScelta metto il secondo valore 
    
}

nome_funzione(nickname, 1234)    //
nome_funzione("paolo", 24);     //riutilizzo funzio
nome_funzione("classe", 102);   //riutilizzo funzio
nome_funzione("mondo", 2024);   //riutilizzo funzio

console.log("------------------parametri dentro la funzione--------------");

//---------------------------------


let input = document.querySelector(".input-fatturato");//punto iniziale per via della classe se e id metto per prima #
let output = document.querySelector(".output-data");

function clacTax(fatturato)  {
    let tasse = fatturato * 0.45;

    output.innerHTML = tasse  //il valore tasse andra nel ahtl di output 
}



input.addEventListener("click", () => { //=> questa e una funzione     //cosi facendo stampa in consol tutti cio che scrivo nel input
    console.log(input.value)
    
    clacTax(input.value)
})




//valori creati input = dalla sclasse input-fatturato
//valori creati output  = dalla sclasse .output-data
//valori creati tasse = output.innerHTM  //quindi html di output
//valori creati fatturato = * 0.45