'use strict'
let Mobiles = [];

let Condition = [];
// create randum function for price

function RandumPrice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// create the constracter

function Mobile(User, Type, Condition) {
    this.User = User;
    this.Type = Type;
    this.Price = RandumPrice(100, 500);
 

    Mobiles.push(this);
    addToLocalStorge()
}
// create table in globel
let parent = document.getElementById("parent");
let table = document.createElement('table');

table.id = "table1";
// document.appendChild(table);
parent.appendChild(table);


//  create the header 
function makingHeader() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);

    let headingCell1 = document.createElement('th');
    headingRow.appendChild(headingCell1);
    headingCell1.textContent = "User";

    let headingCell2 = document.createElement('th');
    headingRow.appendChild(headingCell2);
    headingCell2.textContent = "Type";


    let headingCell3 = document.createElement('th');
    headingRow.appendChild(headingCell3);
    headingCell3.textContent = "Price";

    let headingCell4 = document.createElement('th');
    headingRow.appendChild(headingCell4);
    headingCell4.textContent = "Condition";

}

makingHeader();


//render the function


Mobile.prototype.render = function () {
    let rowData = document.createElement('tr');
    table.appendChild(rowData);


    let rowCellUser = document.createElement('td');
    rowData.appendChild(rowCellUser);
    rowCellUser.textContent = this.User;


    let rowCellType = document.createElement('td');
    rowData.appendChild(rowCellType);
    rowCellType.textContent = this.Type;


    let rowCellPrice = document.createElement('td');
    rowData.appendChild(rowCellPrice);
    rowCellPrice.textContent = this.Price;


    //compare the price

    if (Number(this.Price) > 200) {
        let rowCellCondition = document.createElement('td');
        rowData.appendChild(rowCellCondition);
        rowCellCondition.textContent = "New";
     
    }
    else {
        let rowCellCondition = document.createElement('td');
        rowData.appendChild(rowCellCondition);
        rowCellCondition.textContent = "Used";
    }
}



//create form 
let form = document.getElementById('form');

form.addEventListener('submit', submitter);

// create eventlistiner
function submitter(event) {
    event.preventDefault();
    let newUser = event.target.User.value;
    console.log(newUser)
    let newType = event.target.Type.value;


    const newMobile = new Mobile(newUser, newType);
    newMobile.render();

}

//update to local  Storge
function addToLocalStorge() {
    let arrayData = JSON.stringify(Mobiles);
    localStorage.setItem('MobilesData', arrayData);
}

// function for getting data form localStorge

function gettingDataStorge() {
    let Data = localStorage.getItem('MobilesData');
    let parseData = JSON.parse(Data);


    if (parseData) {
        for (let i = 0; i < parseData.length; i++) {
            new Mobile(parseData[i].User, parseData[i].Type, parseData[i].Price,)
            Mobiles[i].render();
        }
    }
}
gettingDataStorge();




// gaol add button to clear table

let clearButton = document.getElementById('button');
let button = document.createElement('button');
clearButton.appendChild(button);
button.textContent = "clearButton";

clearButton.addEventListener('click', deletTable);
function deletTable() {

   let removeTab = document.getElementById('table1');
   // document.removeChild('removeTab');
    // let tr = td.table; // the row to be removed
    //  table.removeChild(tr);
     table.removeChild(rowData);
   
}
