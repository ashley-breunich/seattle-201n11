"use strict";
//table data
var stuffForFirstRow = ["coffee", 2, 4, 6, 8, 10];
var stuffForSecondRow = ["table", 3, 5, 7, 9, 1];

//access the table element in the html
var tableEl = document.getElementById("coffeeTable");

function tableRowMaker(inputArray) {
    //make a table row
    var trEl = document.createElement("tr");
    //iterate through array
    for (var i = 0; i < inputArray.length; i++) {
        var tdEl = document.createElement("td"); //create
        tdEl.textContent = inputArray[i]; //content
        trEl.appendChild(tdEl); //add cell to the row
    }
    tableEl.appendChild(trEl); //add row to the table
}
tableRowMaker(stuffForFirstRow);
tableRowMaker(stuffForSecondRow);