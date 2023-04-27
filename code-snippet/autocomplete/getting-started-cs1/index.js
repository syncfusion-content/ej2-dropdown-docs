var gameList = [
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

// initialize AutoComplete component
var acObject = new ej.dropdowns.AutoComplete({
    //set the data to dataSource property
    dataSource: gameList,
    //map to colum to fields
    fields: { value: 'game' },
    // set placeholder to AutoComplete input element
    placeholder: "Select games",
    // set the popup list height
    popupHeight: '200px'
});

// render initialized AutoComplete
acObject.appendTo('#atcelement');

document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the control.
        acObject.focusIn();
    }
};


