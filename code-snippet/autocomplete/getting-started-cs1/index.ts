


import { AutoComplete } from '@syncfusion/ej2-dropdowns';

// defined the array of data
let gameList: { [key: string]: Object }[] = [
    { Id: 'Game1', Game: 'Badminton' },
    { Id: 'Game2', Game: 'Basketball' },
    { Id: 'Game3', Game: 'Cricket' },
    { Id: 'Game4', Game: 'Football' },
    { Id: 'Game5', Game: 'Golf' },
    { Id: 'Game6', Game: 'Gymnastics' }
    { Id: 'Game7', Game: 'Hockey' },
    { Id: 'Game8', Game: 'Rugby' },
    { Id: 'Game9', Game: 'Snooker' },
    { Id: 'Game10', Game: 'Tennis' },
];
// initialize AutoComplete component
let atcObject: AutoComplete = new AutoComplete({
    //set the data to dataSource property
    dataSource: gameList,
    //map to column to fields
    fields: { value: 'Game' },
    // set placeholder to AutoComplete input element
    placeholder: "Find a game"
});

// render initialized AutoComplete
atcObject.appendTo('#atcelement');

document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the control.
        atcObject.focusIn();
    }
};


