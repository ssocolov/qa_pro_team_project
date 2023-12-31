"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
buttonSubmit.addEventListener('click',payFine);
function payFine() {

    let fineNumberRegex = /^\d{3}$/;
    if (fineNumberRegex.test(fineNumber.value) === false) {
        alert("Введіть номер штрафу!");
        return;
    }

    let passportRegex = /^[А-ЯІЇ]{2}\d{6}$/i;
    if (passportRegex.test(passport.value) === false) {
        alert("Не вірний паспортний номер");
        return;
    }

    let creditCardRegex = /^\d{16}$/;
    if (creditCardRegex.test(creditCardNumber.value) === false) {
        alert("Не вірна кредитна картка");
        return;
    }

    let cvvRegex = /^\d{3}$/;
    if (cvvRegex.test(cvv.value) === false) {
        alert("Не вірний cvv");
        return;
    }

    let fineSumRegex = /\d$/;
    if (fineSumRegex.test(amount.value) === false) {
        alert("Введіть суму штрафу!");
        return;
    }

    //Звертаючись до властивості finesData ви отримуєте всі дані з файлу data.js
    // console.log(data.finesData);
    // console.log(fineNumber.value);
    // console.log(amount.value);
    const dataBase = data.finesData;

    if (!Number.isNaN(parseFloat(fineNumber.value))) {
        let foundFines = false;
        dataBase.forEach((fines, index) => {
            if (fineNumber.value === fines.номер && Number(amount.value) === fines.сума) {
                foundFines = true;
                dataBase.splice(index, 1);
                alert("Витрачено ;-)")
        }
    });
        if (foundFines === false) {
            alert("Не вірна інформація!");
        }
    }
}











        // }


