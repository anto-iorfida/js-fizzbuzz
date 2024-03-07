// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const numbContainer = document.querySelector('#numbers-container');

for(let i = 0; i <= 100; i++) {
    

    let bgEventMultiple;
    let resulMultiple = '';

    if(i % 5 === 0 && i % 3 === 0) {

        bgEventMultiple = 'm-3-5';
        resulMultiple = 'FizzBuzz'

    } else if (i % 3 === 0){

        bgEventMultiple = 'm-3';
        resulMultiple = 'Fizz'

    }else if (i % 5 === 0){

        bgEventMultiple = 'm-5'
        resulMultiple = 'Buzz'

    } else {

        bgEventMultiple = 'm'
        
    }

    // Per ogni numero creo il box e lo appendo al contenitore
    const newBox = `<div class="box ${bgEventMultiple}">${i}<br>${resulMultiple} </div>`;
    numbContainer.innerHTML += newBox;

    
}