


import { AutoComplete } from '@syncfusion/ej2-dropdowns';

// define the array of data
let sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];

// initialize AutoComplete component
let atcObject: AutoComplete = new AutoComplete({
    //set the data to dataSource property
    dataSource: sportsData
    //set width to suggestion list
    popupWidth: '250px',
    // set placeholder to AutoComplete input element
    placeholder: "Find a game",
    // set the popup list height
    popupHeight: "250px"
});

// render initialized AutoComplete
atcObject.appendTo('#atcelement');


