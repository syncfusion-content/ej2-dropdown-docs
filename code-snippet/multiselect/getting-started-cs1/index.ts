

import { MultiSelect } from '@syncfusion/ej2-dropdowns';

// defined the array of data
let gameList: { [key: string]: Object }[] = [
        { id: 'Game1', game: 'Badminton' },
        { id: 'Game2', game: 'Basketball' },
        { id: 'Game3', game: 'Cricket' },
        { id: 'Game4', game: 'Football' },
        { id: 'Game5', game: 'Golf' },
        { id: 'Game6', game: 'Hockey' },
        { id: 'Game7', game: 'Rugby' },
        { id: 'Game8', game: 'Snooker' },
        { id: 'Game9', game: 'Tennis' },
    ];

// initialize MultiSelect component
let msObject: MultiSelect = new MultiSelect({
    //set the data to dataSource property
    dataSource: gameList,
    //map to colum to fields
    fields: { text: 'game', value:'id' },
    // set placeholder to MultiSelect input element
    placeholder: "Select games",
    // set the popup list height
    popupHeight: '200px'
});

// render initialized MultiSelect
msObject.appendTo('#select');

document.onkeyup = function (e) {
if (e.altKey && e.keyCode === 84 /* t */) {
    // press alt+t to focus the control.
    msObject.focusIn();
}
};



