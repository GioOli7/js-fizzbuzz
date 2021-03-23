//Scrivi un programma che stampi i numeri da 1 a 100, 
//ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz. 
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


for (var i = 1; i <= 100; i++) {
    num = i;
    // se num è divisibile sia per 5 che per 3
    if (num % 3 == 0 & num % 5 == 0) {
        console.log('FizzBuzz');
    } 
    // se num è divisibile per 5
    else if (num % 5 == 0) {
        console.log('Buzz');
    } 
    // se num è divisibile per 3
    else if (num % 3 == 0) {
        console.log('Fizz');
    } 
    // in tutti gli altri casi
    else {
        console.log(num);
    }
}
