// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// selezionare il contenitore dove mettere il box
const numbContainer = document.querySelector('#numbers-container');

// creare un ciclo for dove crei 100 box
for(let i = 1; i <= 100; i++) {
    
    // creare 2 variabili da mettere nella condizione vuote
    let bgEventMultiple;
    let resulMultiple = '';

    // creare condizione
    // se un numero è divisibile sia per 5 che per 3 allora scrivere 'fizzbuzz' e bg colorato
    if(i % 5 === 0 && i % 3 === 0) {

        bgEventMultiple = 'm-3-5';
        resulMultiple = 'FizzBuzz'

    // se un numero è divisibile per 3 allora scrivere 'fizz' e bg colorato
    } else if (i % 3 === 0){

        bgEventMultiple = 'm-3';
        resulMultiple = 'Fizz'

    // se un numero è divisibile per 5 scrivere 'buzz' e bg colorato
    }else if (i % 5 === 0){

        bgEventMultiple = 'm-5'
        resulMultiple = 'Buzz'

    //  se il numero non è divisibile ne per 3 ne per 5 allora solo bg colorato
    } else {

        bgEventMultiple = 'm'
        
    }

    // creo una variabile dove inserico il tag box dove dentro inserisco le due variabili create precedentemente
    const newBox = `<div class="box ${bgEventMultiple}">${i}<br>${resulMultiple} </div>`;

    // prendo la variabile dove ho selezionato il contenitore e gli metto dentro  il box 
    numbContainer.innerHTML += newBox;

    
}