"use strict"

function localDataTypes() {
    let message = "Hello!"
    message = 123456;                       //Не ошибка

    //Число
    let number = 123.54
    console.log(number);

    console.log(1 / 0);         //Infinity
    console.log(Infinity);      //Infinity
    console.log("str" / 2);     //NaN

    const bigInt = 1234567890123456789012345678901234567890n;           //BigInt
    console.log(bigInt);

    //Строка
    let str = "Привет";
    let str2 = 'Привет в других кавычках';
    let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
    let phraseNumber = `Обратные кавычки позволяют встраивать переменные ${2 + 3}`;
    console.log(str);
    console.log(str2);
    console.log(phrase);
    console.log(phraseNumber);

    //логический(булевый) тип


}

localDataTypes();