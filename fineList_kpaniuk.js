"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey) {
    //console.log(searchKey)
    // console.log(DB)

    let result =[]
if (isNaN(searchKey)){
     result = DB.filter((fine)=> {
        return fine.тип.includes(searchKey)
    })
}
else {
     result = DB.filter((fine)=> {
        return fine.номер.includes(searchKey)
    })
}
if (result.length === 0) {
    if (isNaN(searchKey)) {
        alert('Немає штрафів з таким типом');
    } else {
        alert('Немає штрафів з таким номером');
    }

}
    console.log(searchKey);

return result;
}
