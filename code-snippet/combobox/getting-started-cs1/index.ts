

import { ComboBox } from '@syncfusion/ej2-dropdowns';

// defined the array of data
let gameList: { [key: string]: Object }[] = [
        { Id: 'Game1', Game: 'Badminton' },
        { Id: 'Game2', Game: 'Basketball' },
        { Id: 'Game3', Game: 'Cricket' },
        { Id: 'Game4', Game: 'Football' },
        { Id: 'Game5', Game: 'Golf' },
        { Id: 'Game6', Game: 'Hockey' },
        { Id: 'Game7', Game: 'Rugby' },
        { Id: 'Game8', Game: 'Snooker' },
        { Id: 'Game9', Game: 'Tennis' }
    ];

// initialize ComboBox component
let ComboBoxObject: ComboBox = new ComboBox({
    //set the data to dataSource property
    dataSource: gameList,
    //map to colum to fields
    fields: { text: 'Game', value:'Id' },
    // set placeholder to ComboBox input element
    placeholder: "Select a game",
    // set the popup list height
    popupHeight: '200px'
});

// render initialized ComboBox
ComboBoxObject.appendTo('#comboelement');

document.onkeyup = function (e) {
if (e.altKey && e.keyCode === 84 /* t */) {
    // press alt+t to focus the control.
    ComboBoxObject.focusIn();
}
};



