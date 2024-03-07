// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// selezionare il contenitore dove mettere il box
const numbContainer = document.querySelector('.numbers-container');

// creare un ciclo for dove crei 100 box
for(let i = 1; i <= 100; i++) {
    
    // creare 2 variabili da mettere nella condizione vuote
    let bgEventMultiple;
    let resulMultiple = '';

    // creare condizione
    // se un numero è divisibile sia per 5 che per 3 allora scrivere 'fizzbuzz' e bg colorato
    if(i % 5 === 0 & i % 3 === 0) {

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

// voglio creare un bottone dove toglie tutti gli elementi a i numeri multipli sia di 3 che di 5
const multipleFiveAndThree = document.querySelector('#btn-m-5-3');

multipleFiveAndThree.addEventListener('click', function() {
    const multipleFiveAndThree = document.querySelectorAll('.m-3-5');

    for (let i = 0; i < multipleFiveAndThree.length; i++) {
        // Aggiungo o rimuovo la classe 'opaciti' ad ogni click
        multipleFiveAndThree[i].classList.toggle('opaciti');
    }
});


// voglio creare un bottone dove toglie tutti gli elementi a i numeri multipli di 3

// metodo 1
// const multipleThree = document.querySelector('#btn-m-3');

// multipleThree.addEventListener('click', function() {
// const multipleThree = document.querySelectorAll('.m-3');
// console.log(multipleThree, 'expreriment')
// for (i =0; i < multipleThree.length; i++){
//     multipleThree[i].innerHTML = '';
// }
// });

// metodo 2
const multipleThree = document.querySelector('#btn-m-3');

multipleThree.addEventListener('click', function() {
    const multipleThree = document.querySelectorAll('.m-3');

    for (let i = 0; i < multipleThree.length; i++) {
        // Aggiungo o rimuovo la classe 'opaciti' ad ogni click
        multipleThree[i].classList.toggle('opaciti');
    }
});

// voglio creare un bottone dove toglie tutti gli elementi a i numeri multipli di 5
const multipleFive = document.querySelector('#btn-m-5');

multipleFive.addEventListener('click', function() {
    const multipleFive = document.querySelectorAll('.m-5');

    for (let i = 0; i < multipleFive.length; i++) {
        // Aggiungo o rimuovo la classe 'opaciti' ad ogni click
        multipleFive[i].classList.toggle('opaciti');
    }
});

// creo bottone per far sparire tutto e far riapparire
// 1 metodo 
    // const canc = document.querySelector('#udini')
    // canc.addEventListener('click', function () {
    //     const numbContainer = document.querySelector('.numbers-container');
    //     numbContainer.classList.remove('none');

    // })

// 2 metoto che al riclick compare di nuovo utilizzando if
    // const canc = document.querySelector('#udini');
    // let isHidden = true;

    // canc.addEventListener('click', function () {
    // const numbContainer = document.querySelector('.numbers-container');
    // if (isHidden) {
    //     numbContainer.classList.remove('none');
    // } else {
    //     numbContainer.classList.add('none');
    // }
    // isHidden = !isHidden; // Inverti lo stato
    // });

// 3 metodo utilizzando toggle che anche lui usa il riclick
    const canc = document.querySelector('#udini');

    canc.addEventListener('click', function () {
    const numbContainer = document.querySelector('.numbers-container');
    numbContainer.classList.toggle('none');
    });